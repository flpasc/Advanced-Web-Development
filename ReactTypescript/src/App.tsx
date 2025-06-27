import { useState } from 'react'
import './App.css'
import type { Book } from './types/Book'
import BookItem from './components/BookItem'
import { initialBooks } from './data/initialBooks'
import NewBookForm from './components/NewBookForm'

function App() {
	const [bookList, setBooklist] = useState<Book[]>(initialBooks)
	const [nextId, setNextId] = useState<number>(initialBooks.length + 1)

	const handleAddBook = (title: string, author: string): void => {
		const newBook: Book = {
			id: nextId,
			title: title,
			author: author,
			read: false,
		}
		setBooklist([...bookList, newBook])
		setNextId(nextId + 1)
	}

	const handleDeleteBook = (id: number): void => {
		setBooklist((prev) => prev.filter((book) => book.id !== id))
	}

	const toggleRead = (id: number): void => {
		setBooklist((prev) =>
			prev.map((book) =>
				book.id === id ? { ...book, read: !book.read } : book,
			),
		)
	}

	return (
		<>
			<h1>Book Wishlist</h1>
			<ul>
				{bookList.map((book) => (
					<BookItem
						key={book.id}
						book={book}
						onToggleRead={toggleRead}
						onDelete={handleDeleteBook}
					/>
				))}
			</ul>

			<NewBookForm onAddBook={handleAddBook} />
		</>
	)
}

export default App
