const SidebarTitle = ({ children }) => {
	return (
		<div className='flex h-20 items-center gap-1 pl-6 py-6 cursor-default'>
			<img src='./logo.png' className='size-12' draggable='false' />
			<span className='text-sidebar-title font-medium text-3xl'>
				{children}
			</span>
		</div>
	)
}

export default SidebarTitle
