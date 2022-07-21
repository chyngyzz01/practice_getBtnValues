import './ListTitle.css'

function ListTitle(props) {
	return (
		<div className='list-block'>
			{props.getItems.map((item) => {
				return (
					<div className='list-item'>
						<h5>{item.title}</h5>
					</div>
				)
			})}
		</div>
	)
}

export default ListTitle
