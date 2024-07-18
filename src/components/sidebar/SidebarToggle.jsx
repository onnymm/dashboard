const SidebarToggle = ({ openSidebar, setOpenSidebar }) => {
	const handleClick = () => {
		setOpenSidebar(!openSidebar)
	}

	return (
		<>
			<div
				className={`${openSidebar ? 'w-16 md:w-72' : 'w-16'} z-50 flex h-20 items-center transition-width duration-500`}
			>
				<button>
					<img
						src='./logo.png'
						draggable='false'
						onClick={() => handleClick()}
						className='ml-5 mr-1 size-12'
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
