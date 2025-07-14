import dotenv from 'dotenv';
dotenv.config();

import express, { NextFunction, Request, Response } from 'express'
import { access, constants, mkdir, readFile, unlink, writeFile } from 'node:fs/promises';
import nunjucks from 'nunjucks'
import { v4 as uuidv4 } from 'uuid';
import { escape } from 'lodash';
import cors from 'cors'
import path from 'path'
import { FILE } from 'node:dns';


const app = express()
const port = process.env.PORT || 3333
const FILE_DIR = path.join(__dirname, '..', '/messages/')
const FILE_SUFFIX = '.txt'

app.use(express.static(path.join(__dirname, '../public')));
app.use('/css', express.static('node_modules/@picocss/pico/css'));
app.use(express.urlencoded({extended: true}))
app.use(cors())
nunjucks.configure('src/templates/', {
	autoescape: true,
	express: app
});



// Routes
app.get('/', (req, res) => {
  res.render('home.njk');
});

app.post('/create-message', async (req, res) => {
	const id = uuidv4()
	const fileName = `${id}${FILE_SUFFIX}`
	const filePath = path.join(FILE_DIR, fileName)
	const fileUrl = `${req.protocol}://${req.get('host')}/read-message/${id}`;

	try {
		const { message, password } = req.body
		const payload = { message, password }

		await writeFile(filePath, JSON.stringify(payload));
		res.render('link.njk', {fileUrl})
	} catch (error) {
		console.error(error)
		res.render('link.njk', { fileUrl: 'Error saving message.' });
	}
})


app.get('/enter-password/:id', (req, res) => {
	const id = req.params.id
	res.redirect(`read-message/:${id}}`)
})

app.get('/read-message/:id', async (req, res) => {
	const id = req.params.id
	res.render('enter-password.njk', {id})
})

app.post('/authentication/:id', async (req, res) => {
	const id = req.params.id;
	const inputPassword = req.body.password;
	const filePath = path.join(FILE_DIR, `${id}${FILE_SUFFIX}`);

	try {
		const fileContent = await readFile(filePath, 'utf8');
		const file = JSON.parse(fileContent);

		if (inputPassword !== file.password) {
			return res.render('enter-password.njk', { id, error: 'Incorrect password' });
		}

		await unlink(filePath);
		res.render('read-message.njk', { message: file.message });
	} catch (error) {
		console.error(error);
		res.render('enter-password.njk', { id, error: 'Message not found.' });
	}
});


// Start app on port
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
