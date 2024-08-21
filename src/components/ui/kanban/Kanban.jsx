import {
	closestCorners,
	DndContext,
	DragOverlay,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates
} from '@dnd-kit/sortable'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Modal from '../Modal'
import Container from './Container'
import Item from './Item'

const Kanban = () => {
	const [containers, setContainers] = useState([])
	const [activeId, setActiveId] = useState(undefined)
	const [currentContainerId, setCurrentContainerId] = useState()
	const [containerName, setContainerName] = useState('')
	const [itemName, setItemName] = useState('')
	const [showAddContainerModal, setShowAddContainerModal] = useState(false)
	const [showAddItemModal, setShowAddItemModal] = useState(false)

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	)

	const onAddContainer = () => {
		console.log(onAddContainer)
		if (!containerName) return
		const id = `container-${uuidv4()}`
		setContainers([
			...containers,
			{
				id,
				title: containerName,
				items: []
			}
		])
		setContainerName('')
		setShowAddContainerModal(false)
	}

	const onAddItem = () => {
		if (!itemName) return
		const id = `item-${uuidv4()}`
		const container = containers.find(item => item.id === currentContainerId)
		if (!container) return
		container.items.push({ id, title: itemName })
		setContainers([...containers])
		setItemName('')
		setShowAddItemModal(false)
	}

	const findValueOfItems = (id, type) => {
		if (type === 'container') {
			return containers.find(container => container.id === id)
		}
		if (type === 'item') {
			return containers.find(container =>
				container.items.find(item => item.id === id)
			)
		}
	}

	const findItemTitle = id => {
		const container = findValueOfItems(id, 'item')
		if (!container) return ''
		const item = container.items.find(item => item.id === id)
		if (!item) return ''
		return item.title
	}

	const findContainerTitle = id => {
		const container = containers.find(item => item.id === id)
		if (!container) return ''
		return container.title
	}

	const findContainerItems = id => {
		const container = containers.find(item => item.id === id)
		if (!container) return []
		return container.items
	}

	const handleDragStart = e => {
		const { active } = e
		const { id } = active
		setActiveId(id)
	}

	const handleDragMove = e => {
		const { active, over } = e

		// Handle item sorting
		if (
			active.id.toString().includes('item') &&
			over?.id.toString().includes('item') &&
			active &&
			over &&
			active.id !== over.id
		) {
			// Find the active and over containers
			const activeContainer = findValueOfItems(active.id, 'item')
			const overContainer = findValueOfItems(over.id, 'item')

			// If active or over containers are undefined, return
			if (!activeContainer || !overContainer) return

			// Find active and over container index
			const activeContainerIndex = containers.findIndex(
				container => container.id === activeContainer.id
			)
			const overContainerIndex = containers.findIndex(
				container => container.id === overContainer.id
			)

			// Find index of active and over item
			const activeItemIndex = activeContainer.items.findIndex(
				item => item.id === active.id
			)
			const overItemIndex = overContainer.items.findIndex(
				item => item.id === over.id
			)

			// Dragging in the same container
			if (activeContainerIndex === overContainerIndex) {
				let newItems = [...containers]
				newItems[activeContainerIndex].items = arrayMove(
					newItems[activeContainerIndex].items,
					activeItemIndex,
					overItemIndex
				)

				setContainers(newItems)
			} else {
				// Dragging in a different container
				let newItems = [...containers]
				const [removedItem] = newItems[activeContainerIndex].items.splice(
					activeItemIndex,
					1
				)
				newItems[overContainerIndex].items.splice(overItemIndex, 0, removedItem)
				setContainers(newItems)
			}
		}

		// Handling item drop into a container
		if (
			active.id.toString().includes('item') &&
			over?.id.toString().includes('container') &&
			active &&
			over &&
			active.id !== over.id
		) {
			// Find active and over container
			const activeContainer = findValueOfItems(active.id, 'item')
			const overContainer = findValueOfItems(over.id, 'container')

			// If the active or over container is undefined, return
			if (!activeContainer || !overContainer) return

			// Find index of active and over container
			const activeContainerIndex = containers.findIndex(
				container => container.id === activeContainer.id
			)
			const overContainerIndex = containers.findIndex(
				container => container.id === overContainer.id
			)

			// Find the index of active item in active container
			const activeItemIndex = activeContainer.items.findIndex(
				item => item.id === active.id
			)

			// Remove active item from active container and add to over container
			let newItems = [...containers]
			const [removedItem] = newItems[activeContainerIndex].items.splice(
				activeItemIndex,
				1
			)
			newItems[overContainerIndex].items.push(removedItem)

			setContainers(newItems)
		}
	}

	const handleDragEnd = e => {
		const { active, over } = e

		// Handle container sorting
		if (
			active.id.toString().includes('container') &&
			over?.id.toString().includes('container') &&
			active &&
			over &&
			active.id !== over.id
		) {
			const activeContainerIndex = containers.findIndex(
				container => container.id === active.id
			)
			const overContainerIndex = containers.findIndex(
				container => container.id === over.id
			)

			// Swap active and over container
			let newItems = [...containers]
			newItems = arrayMove(newItems, activeContainerIndex, overContainerIndex)

			setContainers(newItems)
		}

		// Handle item sorting
		if (
			active.id.toString().includes('item') &&
			over?.id.toString().includes('item') &&
			active &&
			over &&
			active.id !== over.id
		) {
			// Find active and over containers
			const activeContainer = findValueOfItems(active.id, 'item')
			const overContainer = findValueOfItems(over.id, 'item')

			// If the active or over container is undefined, return
			if (!activeContainer || !overContainer) return

			// Find active and over container indexes
			const activeContainerIndex = containers.findIndex(
				container => container.id === activeContainer.id
			)
			const overContainerIndex = containers.findIndex(
				container => container.id === overContainer.id
			)

			// Find active and over item indexes
			const activeItemIndex = activeContainer.findIndex(
				item => item.id === active.id
			)
			const overItemIndex = overContainer.findIndex(item => item.id === over.id)

			// In the same container
			if (activeContainerIndex === overContainerIndex) {
				let newItems = [...containers]
				newItems[activeContainerIndex].items = arrayMove(
					newItems[activeContainerIndex].items,
					activeItemIndex,
					overItemIndex
				)

				setContainers(newItems)
			} else {
				// In different container
				let newItems = [...containers]
				const [removedItem] = newItems[activeContainerIndex].items.splice(
					activeItemIndex,
					1
				)
				newItems[overContainerIndex].items.splice(overItemIndex, 0, removedItem)
				setContainers(newItems)
			}

			// Handling item drop into a container
			if (
				active.id.toString().includes('item') &&
				over?.id.toString().includes('container') &&
				active &&
				over &&
				active.id !== over.id
			) {
				const activeContainer = findValueOfItems(active.id, 'item')
				const overContainer = findValueOfItems(over.id, 'container')

				// If the active or over container is undefined, return
				if (!activeContainer || !overContainer) return

				// Find active and over container indexes
				const activeContainerIndex = containers.findIndex(
					container => container.id === activeContainer.id
				)
				const overContainerIndex = containers.findIndex(
					container => container.id === overContainer.id
				)

				// Find the index of the active item in the active container
				const activeItemIndex = activeContainer.items.findIndex(
					item => item.id === active.id
				)

				let newItems = [...containers]
				const [removedItem] = newItems[activeContainerIndex].items.splice(
					activeItemIndex,
					1
				)

				newItems[overContainerIndex].items.push(removedItem)
				setContainers(newItems)
			}
			setActiveId(null)
		}
	}

	return (
		<>
			<Modal
				name='container'
				isShown={showAddContainerModal}
				setIsShown={setShowAddContainerModal}
				value={containerName}
				onInputChange={setContainerName}
				onButtonClick={onAddContainer}
			/>
			<Modal
				name='item'
				isShown={showAddItemModal}
				setIsShown={setShowAddItemModal}
				value={itemName}
				onInputChange={setItemName}
				onButtonClick={onAddItem}
			/>
			{/* Contenedor principal */}
			<div className='col-span-12 mb-4 flex select-none flex-col gap-y-2 rounded-sm bg-slate-200 p-2 shadow-md'>
				{/* Barra superior */}
				<div className='flex w-full items-center justify-between text-center'>
					<button
						onClick={() => setShowAddContainerModal(true)}
						className='bg-feed-buttons hover:bg-feed-buttons-hover ml-auto w-max rounded-sm px-2 py-1 font-medium text-white shadow-md transition'
					>
						Add container
					</button>
				</div>
				{/* Contenido principal */}
				{containers.length > 0 && (
					<div className='grid grid-cols-1 gap-6 bg-slate-100 p-2 shadow-inner shadow-slate-300 sm:grid-cols-2 lg:grid-cols-3'>
						<DndContext
							sensors={sensors}
							collisionDetection={closestCorners}
							onDragStart={handleDragStart}
							onDragMove={handleDragMove}
							onDragEnd={handleDragEnd}
						>
							{/* Contexto de contenedores */}
							<SortableContext items={containers.map(i => i.id)}>
								{containers.map(container => (
									<Container
										key={container.id}
										id={container.id}
										title={container.title}
										onAddItem={() => {
											setShowAddItemModal(true)
											setCurrentContainerId(container.id)
										}}
									>
										{/* Contexto de items */}
										<SortableContext items={container.items.map(i => i.id)}>
											<div className='flex h-max flex-col items-start gap-y-1'>
												{container.items.map(item => (
													<Item key={item.id} id={item.id} title={item.title} />
												))}
											</div>
										</SortableContext>
									</Container>
								))}
							</SortableContext>
							{/* Objeto fantasma */}
							<DragOverlay>
								{activeId && activeId.toString().includes('item') && (
									<Item id={activeId} title={findItemTitle(activeId)} />
								)}
								{activeId && activeId.toString().includes('container') && (
									<Container id={activeId} title={findContainerTitle(activeId)}>
										{findContainerItems(activeId).map(i => (
											<Item key={i.id} id={i.id} title={i.title} />
										))}
									</Container>
								)}
							</DragOverlay>
						</DndContext>
					</div>
				)}
			</div>
		</>
	)
}

export default Kanban
