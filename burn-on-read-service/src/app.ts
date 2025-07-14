import dotenv from 'dotenv';
dotenv.config();

import express, { NextFunction, Request, Response } from 'express'
import { access, constants, mkdir, readFile, unlink, writeFile } from 'node:fs/promises';
import nunjucks from 'nunjucks'
import { v4 as uuidv4 } from 'uuid';
import { escape } from 'lodash';
import cors from 'cors'
import path from 'path'


const port = process.env.PORT || 3333
const messagesDir = path.join(__dirname, '../messages')

const app = express()

app.use(express.static(path.join(__dirname, '../public')));
app.use('/css', express.static('node_modules/@picocss/pico/css'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())
nunjucks.configure('src/templates/', {
	autoescape: true,
	express: app
});

// Check for messages DIR
(async () => {
  try {
    await access(messagesDir, constants.F_OK);
    console.log('messages/ DIR exists');
  } catch {
    await mkdir(messagesDir, { recursive: true });
    console.log('messages/ DIR created');
  }
})();

// Helper
async function createMessage(req: Request): Promise<string> {
  const id = uuidv4();
  const filePath = path.join(messagesDir, `${id}.txt`);
	const message = escape(req.body.message.trim())
  await writeFile(filePath, message ?? '');
  return `${req.protocol}://${req.get('host')}/read/${id}`;
}

async function burnAfterRead(req: Request, res: Response, next: NextFunction): Promise<void> {
  const filePath = path.join(messagesDir, `${req.params.id}.txt`);
  try {
    res.locals.content = await readFile(filePath, 'utf8');
    await unlink(filePath);         
    return next();
  } catch {
		res.render('read.njk', { content: 'Message not found or deleted.' })
  }
}


// Routes
app.get('/', (_req, res) => {
  res.render('home.njk');
});

app.post('/create-message', async (req, res) => {
  const link = await createMessage(req);
  res.render('create-message.njk', { link });
});

app.get('/read/:id', burnAfterRead, (req, res) => {
  res.render('read.njk', { content: res.locals.content });
});



// Start app on port
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
