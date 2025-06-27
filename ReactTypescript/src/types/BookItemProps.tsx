import type { Book } from './Book'

export type BookItemProps = {
	book: Book
	onToggleRead: (id: number) => void
	onDelete: (id: number) => void
}
