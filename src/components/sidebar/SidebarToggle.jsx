const SidebarToggle = ({ openSidebar, setOpenSidebar }) => {
	const handleClick = () => {
		setOpenSidebar(!openSidebar)
	}

	return (
		<>
			<div
				className={`${openSidebar ? 'w-72 transition-width' : ''} transition-all z-50 flex h-20 items-center`}
			>
				<button>
					<img
						src='./logo.png'
						draggable='false'
						onClick={() => handleClick()}
						className='size-12 ml-5 mr-1'
						style={{
							transition: 'transform 0.4s ease',
							transform: openSidebar ? 'rotate(50deg)' : 'rotate(0deg)'
						}}
					/>
				</button>
			</div>
		</>
	)
}

export default SidebarToggle
