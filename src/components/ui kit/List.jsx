const List = ({ Contains, data, name }) => {
	if (!data.length) return <p>There are no {name.toLowerCase()}.</p>

	return (
		<div className='flex flex-col'>
			{data.map(item => (
				<Contains key={item.id} {...item} />
			))}
		</div>
	)
}

export default List
