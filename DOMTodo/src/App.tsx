import { useState } from 'react'
import './App.css'

function App() {
	interface Todo {
		name: string
		done: boolean
	}

	const [todos, setTodos] = useState<Todo[]>([
		{ name: 'important', done: false },
	])
	const [nameInput, setNameInput] = useState<string>('')
	const [doneInput, setDoneInput] = useState<boolean>(false)

	return (
		<>
			<h1>TODO</h1>
			<div>
				<input
					type='text'
					placeholder='Name'
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
				/>
				<input
					type='checkbox'
					onChange={(e) => setDoneInput(e.target.checked)}
				/>
			</div>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						<div
							style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
						>
							{todo.name}
						</div>
						<input
							type='checkbox'
							checked={todo.done}
							onChange={() =>
								setTodos((prev) =>
									prev.map((item, i) =>
										i === index ? { ...item, done: !item.done } : item,
									),
								)
							}
						></input>
						<button
							onClick={() =>
								setTodos((prev) => prev.filter((_, i) => i !== index))
							}
						>
							X
						</button>
					</li>
				))}
			</ul>
			<button
				onClick={() => {
					setTodos((prev) => [...prev, { name: nameInput, done: doneInput }])
					setNameInput('')
					setDoneInput(false)
				}}
			>
				Add Todo
			</button>
		</>
	)
}

export default App
