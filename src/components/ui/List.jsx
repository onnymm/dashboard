/*
Contains: componente formato del contenido
data: colección con los detalles de cada componente a generar
name: nombre (solo se le da uso para la notificación de falta de datos de entrada)
extraStyles: estilos extra
*/

const List = ({ Contains, data, name, extraStyles, ...rest }) => {
	/* Genera una columna de componentes */

	return (
		<>
			<div className={`${extraStyles} flex flex-col`}>
				{data ? (
					// Por cada elemento, generar una instancia del componente formato
					data.map(item => <Contains key={item.id} {...item} {...rest} />)
				) : (
					// En caso de no haber datos, notificar
					<p>There are no {name}.</p>
				)}
			</div>
		</>
	)
}

export default List
