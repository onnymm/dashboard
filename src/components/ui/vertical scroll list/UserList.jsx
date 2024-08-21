import { closestCenter, DndContext } from '@dnd-kit/core'
import {
	restrictToParentElement,
	restrictToVerticalAxis
} from '@dnd-kit/modifiers'
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { useRef, useState } from 'react'
import { User } from './User'

const UserList = () => {
	const [users, setUsers] = useState([])
	const [inputValue, setInputValue] = useState('')

	const maxInputLength = 30

	const svgRefs = useRef([]) // Create an array of refs for user's drag handle SVGs

	const addUser = () => {
		if (inputValue) {
			const newUser = {
				id: users.length + 1,
				name: inputValue
			}
			setInputValue('')
			setUsers(users => [...users, newUser])
		}
	}

	const onDragEnd = e => {
		const { active, over } = e
		if (over && active.id !== over.id) {
			setUsers(users => {
				const oldIndex = users.findIndex(user => user.id === active.id)
				const newIndex = users.findIndex(user => user.id === over.id)
				return arrayMove(users, oldIndex, newIndex)
			})
			// Blur the SVG when the drag ends (blur means take focus away)
			svgRefs.current.forEach(ref => ref.blur())
		} else {
			// If it didn't move, take the focus away anyways
			svgRefs.current.forEach(ref => ref.blur())
		}
		/*
        The two blurs ensure focus only remains while there is INTERACTION with
        the SVG, if these weren't present, there would be issues with focus.
        */
	}

	return (
		<div
			className={`col-span-12 flex h-max select-none flex-col gap-2 rounded-sm bg-slate-200 p-2 text-center text-slate-800 shadow-md lg:col-span-6 ${users.length > 0 && 'pb-5'}`}
		>
			{/* Barra superior */}
			<div className='flex h-min w-full justify-between'>
				<div className='flex w-max items-center rounded-sm bg-white outline-1 outline-slate-500 focus-within:outline-dashed'>
					<input
						placeholder='Type username...'
						type='text'
						className='items-left flex flex-grow bg-transparent p-1 pl-2 outline-none'
						value={inputValue}
						maxLength={30}
						onKeyDown={e => e.key === 'Enter' && addUser()}
						onChange={e => setInputValue(e.target.value)}
					/>
					{/* Contador de caracteres restantes */}
					<span className='w-8 px-2 opacity-80'>
						{maxInputLength - inputValue.length}
					</span>
				</div>
				<button
					className={`${inputValue.length > 0 ? 'hover:bg-feed-buttons-hover' : 'cursor-default opacity-70'} bg-feed-buttons w-max rounded-sm px-2 font-medium text-white shadow-md transition`}
					onClick={addUser}
				>
					Add user
				</button>
			</div>
			{/* Lista */}
			{users.length > 0 && (
				<DndContext
					modifiers={[restrictToParentElement, restrictToVerticalAxis]}
					collisionDetection={closestCenter}
					onDragEnd={onDragEnd}
					autoScroll={true}
				>
					<div className='grid max-h-40 gap-1 overflow-y-auto bg-slate-100 p-2 text-left shadow-inner shadow-slate-300'>
						<SortableContext
							items={users}
							strategy={verticalListSortingStrategy}
						>
							{users.map((user, index) => (
								<User
									key={user.id}
									user={user}
									svgRef={element => (svgRefs.current[index] = element)}
								/>
							))}
						</SortableContext>
					</div>
				</DndContext>
			)}
		</div>
	)
}

export default UserList
