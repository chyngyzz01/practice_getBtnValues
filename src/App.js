import { useState } from 'react'
import './App.css'
import Item from './components/Item'
import ListTitle from './components/ListTitle'

const data = [
	{
		id: 'el1',
		title: 'NextJS',
		checked: false,
	},
	{
		id: 'el2',
		title: 'ReactJs',
		checked: false,
	},
	{
		id: 'el3',
		title: 'JS',
		checked: false,
	},
]
function App() {
	const [items, setItems] = useState(data)
	const [selectedItems, setSelectedItems] = useState([])

	function itemSelectHandler(item) {
		const updatedItems = []
		items.map((el) => {
			el.id === item.id
				? updatedItems.push({ ...el, checked: true })
				: updatedItems.push(el)
		})
		setItems(updatedItems)

		const newItemsValue = [...selectedItems, item]
		setSelectedItems(newItemsValue)
		console.log(updatedItems, newItemsValue)
	}

	return (
		<div className='App'>
			{items.map((item) => {
				return (
					<Item
						text={item.title}
						key={item.id}
						checked={item.checked}
						onClick={() => itemSelectHandler(item)}
					/>
				)
			})}
			<div className='list'>
				<ListTitle getItems={selectedItems} />
			</div>
		</div>
	)
}

export default App
