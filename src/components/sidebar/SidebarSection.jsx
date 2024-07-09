const SidebarSection = ({ children, icon: Icon }) => {
	return (
		<div className='hover:bg-sidebar-section-hover transition duration-300 flex flex-row w-full items-center gap-2 px-5 py-2 rounded-sm'>
			<Icon className='size-6 fill-sidebar-section' />
			<span className='text-sidebar-section font-medium'>{children}</span>
		</div>
	)
}

export default SidebarSection
