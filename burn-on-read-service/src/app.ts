import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express'
import { access, constants, mkdir } from 'node:fs/promises';
import nunjucks from 'nunjucks'
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors'
import path from 'path'
import fs from 'fs'


const port = process.env.PORT || 3333
const messagesDir = path.join(__dirname, '../messages')

async function doesMessageDirExist(): Promise<void>{
	try {
		await access(messagesDir, constants.F_OK);
		console.log('Directory exists')
	} catch (error) {
		console.log('Directory does NOT exist, creating new')
		mkdir(messagesDir)
	}
}

doesMessageDirExist()

const app = express()
app.use(express.static(path.join(__dirname, '../public')));
app.use('/css', express.static('node_modules/@picocss/pico/css'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())
nunjucks.configure('src/templates/', {
	autoescape: true,
	express: app
});



app.get('/', (req: Request, res: Response) => {
	res.render('home.njk')
})

app.post('/create-message', (req, res) => {
	const {message} = req.body
	const id = uuidv4()

	const filePath = path.join(messagesDir,`${id}.txt` )
	fs.writeFileSync(filePath, message)
	const link = `${req.protocol}://${req.get('host')}/read/${id}`;
	res.render('create-message.njk', { link })
})

app.get('/read/:id', (req, res) => {
	const id = req.params.id
	const filePath = path.join(messagesDir, `${id}.txt`)

	if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    fs.unlinkSync(filePath); // Delete the file immediately
    res.render('read.njk', { content });
  } else {
    res.status(404).send('Message not found or already deleted.');
  }
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
