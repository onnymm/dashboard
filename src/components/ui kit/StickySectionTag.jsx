const StickySectionTag = ({ children }) => {
	/*
	    Se pega al tope del contendedor cuando hay scroll, si se llaman varias, se pueden encimar una sobre la otra cuando
        lleguen al tope.
    */
	return (
		<div className='sticky top-0 z-9999 bg-sidebar-background p-2 dark:bg-sidebar-background-d'>
			<span className='px-5 py-3 text-sm font-medium text-white opacity-50'>
				{children}
			</span>
		</div>
	)
}

export default StickySectionTag
