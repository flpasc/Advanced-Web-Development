import type { BookItemProps } from '../types/BookItemProps'

export default function BookItem({
	book,
	onToggleRead,
	onDelete,
}: BookItemProps) {
	return (
		<>
			<li key={book.id}>
				<div>
					{book.title} by {book.author}
				</div>
				<input
					type='checkbox'
					checked={book.read}
					onChange={() => onToggleRead(book.id)}
				/>
				<button onClick={() => onDelete(book.id)}>X</button>
			</li>
		</>
	)
}
