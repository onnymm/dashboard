const SidebarTitle = ({ children }) => {
	return (
		<div className='flex w-full h-20 items-center gap-1 pl-6 py-6 border border-red-500'>
			<img src='./logo.png' className='h-12' draggable='false'></img>
			<span className='text-sidebar-title font-medium text-3xl'>
				{children}
			</span>
		</div>
	)
}

export default SidebarTitle
