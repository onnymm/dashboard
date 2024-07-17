const List = ({ Contains, data, name, ...rest }) => {
	return (
		<div className='flex flex-col'>
			{data ? (
				data.map(item => <Contains key={item.id} {...item} {...rest} />)
			) : (
				<p>There are no {name}.</p>
			)}
		</div>
	)
}

export default List
