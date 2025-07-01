import { useState } from 'react'
import './App.css'

function App() {
	// Task 1
	const [visible, setVisible] = useState<boolean>(false)
	// Task 2
	const [nameInput, setNameInput] = useState<string>('')
	const [displayName, setDisplayName] = useState<string>('')
	// Task 3
	const [visibilityToggle, setVisibilityToggle] = useState<boolean>(false)

	// Task 4
	const [listItems, setListItems] = useState<string[]>([])
	const [newItem, setNewItem] = useState<string>('')

	// Task 6
	const [counter, setCounter] = useState<number>(0)

	// Task 7
	const [backgroundColor, setBackgroundColor] = useState<string>('white')

	// Task 8
	const [charCount, setCharCount] = useState<number>(0)
	// Task 1
	const handleButtonClick = () => {
		setVisible((prev) => !prev)
	}

	const handleChange = (e) => {
		setNameInput(e.target.value)
	}

	const handleSubmit = () => {
		setDisplayName(nameInput)
	}

	const handleVisibilityToggle = () => {
		setVisibilityToggle((prev) => !prev)
	}

	const handleDeleteItem = (index: number) => {
		setListItems((prev) => prev.filter((item, i) => i !== index))
	}

	return (
		<>
			<h1>Exercise 1</h1>
			<button onClick={handleButtonClick}>Say Hello</button>
			{visible && <p>Hello from Typescript</p>}

			<h1>Exercise 2</h1>
			<input
				type='text'
				id='nameInput'
				name='nameInput'
				placeholder='Enter Name'
				value={nameInput}
				onChange={handleChange}
			/>
			<button onClick={handleSubmit}>Submit</button>
			{nameInput && <p>{displayName}</p>}

			<h1>Exercise 3</h1>
			<button
				id='toggleBtn'
				onClick={handleVisibilityToggle}
			>
				Toggle visibility
			</button>
			<p
				style={{ display: visibilityToggle ? 'block' : 'none' }}
				id='hiddenText'
			>
				Now you see me!
			</p>

			<h1>Exercise 4</h1>
			<input
				type='text'
				onChange={(e) => {
					setNewItem(e.target.value)
				}}
			/>
			<button
				id='addBtn'
				onClick={() => {
					setListItems((prev) => [...prev, newItem])
				}}
			>
				Add Item
			</button>
			<ul id='itemList'>
				{listItems.map((item, index) => (
					<>
						<li key={index}>{item}</li>
						<button onClick={() => handleDeleteItem(index)}>X</button>
					</>
				))}
			</ul>

			<h1>Exercise 5</h1>
			<button
				onClick={() => {
					setCounter((prev) => (prev += 1))
				}}
			>
				+
			</button>
			<span style={{ margin: '20px' }}>{counter}</span>
			<button
				onClick={() => {
					setCounter((prev) => (prev -= 1))
				}}
			>
				-
			</button>

			<h1>Exercise 7</h1>
			<select
				id='colorSelect'
				onChange={(e) => setBackgroundColor(e.target.value)}
			>
				<option value='white'>White</option>
				<option value='lightblue'>Lightblue</option>
				<option value='lightgreen'>Lightgreen</option>
			</select>
			<div
				id='colorBox'
				style={{
					justifySelf: 'center',
					width: '100px',
					height: '100px',
					border: '1px solid black',
					margin: '5px',
					backgroundColor: backgroundColor,
				}}
			></div>

			<h1>Exercise 8</h1>
			<textarea
				onChange={(e) => setCharCount(e.target.value.length)}
				id='textInput'
			></textarea>
			<p id='charCount'>{charCount}</p>
		</>
	)
}

export default App
