// Props: componente contenido, datos, nombre, características extra
// Función: genera una lista en colummna de componentes que contienen los datos especificados.

const List = ({ Contains, data, name, ...rest }) => {
	return (
		<div className='flex flex-col'>
			{/* Si existen datos */}
			{data ? (
				// Por cada elemento, generar una instancia del componente
				data.map(item => <Contains key={item.id} {...item} {...rest} />)
			) : (
				// En caso de no haber datos, notificar
				<p>There are no {name}.</p>
			)}
		</div>
	)
}

export default List
