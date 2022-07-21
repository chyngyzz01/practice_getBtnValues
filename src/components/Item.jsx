import './Item.css'

function Item(props) {

	const className = props.checked ? 'disabled' : 'active'

	return <div className={className} onClick={props.onClick}>{props.text}</div>
}

export default Item
