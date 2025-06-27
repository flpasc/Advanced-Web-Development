import { useState } from 'react'

type BookFormProps = {
	onAddBook: (title: string, author: string) => void
}

export default function NewBookForm({ onAddBook }: BookFormProps) {
	const [author, setAuthor] = useState('')
	const [title, setTitle] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onAddBook(title.trim(), author.trim())
		setTitle('')
		setAuthor('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Author'
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
			></input>

			<input
				type='text'
				placeholder='Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<button type='submit'>Add Book</button>
		</form>
	)
}
