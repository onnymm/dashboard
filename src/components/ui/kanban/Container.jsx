import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Container = ({ id, children, title, onAddItem }) => {
	const {
		attributes,
		listeners, // Listens to drag events
		transition,
		transform,
		isDragging,
		setNodeRef
	} = useSortable({
		id: id,
		data: {
			type: 'container'
		}
	})

	const style = {
		transition,
		transform: CSS.Translate.toString(transform)
	}

	return (
		<div
			{...attributes}
			style={style}
			ref={setNodeRef}
			className={`flex h-full min-h-32 w-full flex-col gap-y-2 rounded-sm bg-gray-50 p-2 shadow-md ${isDragging && 'opacity-50'}`}
		>
			{/* Header del contenedor */}
			<div className='flex items-center justify-between'>
				{/* Título */}
				<div className='flex h-min flex-col gap-y-1'>
					<h1 className='px-2 text-lg font-semibold text-slate-700 [overflow-wrap:anywhere]'>
						{title}
					</h1>
				</div>
				{/* Handle para arrastre */}
				<button
					className='touch-none rounded-md text-xs transition duration-300 hover:bg-slate-100 hover:shadow-md'
					{...listeners}
				>
					<svg
						className='size-8 focus:outline-none'
						{...attributes}
						{...listeners}
						viewBox='0 0 25 25'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M9.5 8C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5C8.67157 5 8 5.67157 8 6.5C8 7.32843 8.67157 8 9.5 8ZM9.5 14C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14ZM11 18.5C11 19.3284 10.3284 20 9.5 20C8.67157 20 8 19.3284 8 18.5C8 17.6716 8.67157 17 9.5 17C10.3284 17 11 17.6716 11 18.5ZM15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8ZM17 12.5C17 13.3284 16.3284 14 15.5 14C14.6716 14 14 13.3284 14 12.5C14 11.6716 14.6716 11 15.5 11C16.3284 11 17 11.6716 17 12.5ZM15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z'
								fill='#121923'
							></path>
						</g>
					</svg>
				</button>
			</div>
			{children}
			<button
				onClick={onAddItem}
				className='mx-auto w-max rounded-sm px-2 py-1 font-medium text-slate-700 transition duration-300 hover:bg-slate-100 hover:shadow-md'
			>
				Add item
			</button>
		</div>
	)
}

export default Container
