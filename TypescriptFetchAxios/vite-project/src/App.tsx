import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
	const [posts, setPosts] = useState<Post[]>([])
	const [error, setError] = useState<string | null>(null)
	const [newPost, setNewPost] = useState<NewPost | null>(null)
	const [postError, setPostError] = useState<string | null>(null)
	const [users, setUsers] = useState<User[]>([])
	const [usersError, setUsersError] = useState<string | null>(null)
	const [newUser, setNewUser] = useState<User | null>(null)

	const [emailInput, setEmailInput] = useState<string>('')
	const [nameInput, setNameInput] = useState<string>('')

	const [uiUser, setUiUser] = useState<User | null>(null)
	const [uiUserError, setUiUserError] = useState<string | null>(null)

	interface Post {
		body: string
		id: number
		title: string
		userId: number
	}

	interface NewPost {
		title: string
		body: string
		userId: number
		id?: number
	}

	type User = {
		address?: {
			city?: string
			geo?: {
				lat?: number
				lng?: number
			}
			street?: string
			suite?: string
			zipcode?: string
		}
		company?: {
			name?: string
			catchPhrase?: string
			bs?: string
		}
		email?: string
		id?: number
		name?: string
		phone?: string
		username?: string
		website?: string
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<Post[]>(
					'https://jsonplaceholder.typicode.com/posts',
				)
				setPosts(response.data)
			} catch (error) {
				if (axios.isAxiosError(error)) {
					console.error('Axios Error: ', error.message)
					setError(error.message)
				} else {
					setError('Unexpected Error')
				}
			}
		}

		const postData = async () => {
			const newPost: NewPost = {
				body: 'Hallo',
				title: 'Iam a post request',
				userId: 1,
			}
			try {
				const response = await axios.post(
					'https://jsonplaceholder.typicode.com/posts',
					newPost,
				)
				setNewPost(response.data)
			} catch (error) {
				if (axios.isAxiosError(error)) {
					console.error('Axios Error: ', error.message)
					setPostError(error.message)
				} else {
					setError('Unexpected Error')
				}
			}
		}

		const getUsers = async () => {
			try {
				const response = await axios.get<User[]>(
					'https://jsonplaceholder.typicode.com/users',
				)
				setUsers(response.data)
				console.log(response.data)
			} catch (error) {
				if (axios.isAxiosError(error)) {
					console.error(error.message)
					setUsersError(error.message)
				} else {
					setError('Unexpected Error')
				}
			}
		}

		const postUser = async () => {
			const newUserData: User = {
				name: 'Florian',
				username: 'Flo',
				email: 'asdasd@asd.de',
			}
			try {
				const response = await axios.post(
					'https://jsonplaceholder.typicode.com/users',
					newUserData,
				)
				setNewUser(response.data)
			} catch (error) {
				if (axios.isAxiosError(error)) {
					console.error(error.message)
					setUsersError(error.message)
				} else {
					setUsersError('Unexpected Error')
				}
			}
		}

		fetchData()
		postData()
		getUsers()
		postUser()
	}, [])

	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const newUser: User = {
			name: nameInput,
			email: emailInput,
		}

		try {
			const response = await axios.post(
				'https://jsonplaceholder.typicode.com/users',
				newUser,
			)
			setUiUser(response.data)
			console.log('New user added')
			setEmailInput('')
			setNameInput('')

			//Refresh
			const getResponse = await axios.get(
				'https://jsonplaceholder.typicode.com/posts',
			)
			setPosts(getResponse.data)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				setUiUserError(error.message)
				console.error(error.message)
			} else {
				setUiUserError('Unexpexted error')
			}
		}
	}

	return (
		<>
			<h1>Get Request:</h1>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<ul id='postList'>
				{posts.map((entry) => (
					<li key={entry.id}>{entry.title}</li>
				))}
			</ul>

			<h1>Post Request</h1>
			{postError && <p style={{ color: 'red' }}>{postError}</p>}
			{newPost && <h4>User Id: {newPost.id}</h4>}

			<h1>Users:</h1>
			{error && <p style={{ color: 'red' }}>{usersError}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>

			<h1>New User</h1>
			{usersError && <p style={{ color: 'red' }}></p>}
			<ul>{newUser && <li>{newUser.name}</li>}</ul>

			<h1>Small UI</h1>
			<form onSubmit={handleFormSubmit}>
				<input
					id='emailInput'
					type='text'
					placeholder='Email'
					value={emailInput}
					onChange={(e) => setEmailInput(e.target.value)}
				></input>
				<input
					id='nameInput'
					type='text'
					placeholder='Name'
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
				></input>
				<button type='submit'>SUBMIT</button>
			</form>
		</>
	)
}

export default App
