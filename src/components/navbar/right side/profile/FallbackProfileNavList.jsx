const FallbackProfileNavList = () => {
	return (
		<div className='dark:bg-navbar-icons-d flex h-min w-48 flex-col items-center justify-center gap-2 rounded-md bg-white p-3 shadow-back dark:bg-navbar-icons-background-d'>
			{[...Array(2)].map((_, index) => (
				<div
					key={index}
					className='flex w-full items-center gap-2 dark:opacity-50'
				>
					<div className='aspect-square w-2/12 animate-pulse rounded-md bg-slate-300' />
					<div className='h-4 w-10/12 animate-pulse rounded-md bg-slate-300' />
				</div>
			))}
			<hr className='my-1 w-full animate-pulse border-2 border-slate-300 dark:opacity-20' />
			<div className='flex w-full items-center gap-2 dark:opacity-50'>
				<div className='aspect-square w-2/12 animate-pulse rounded-md bg-slate-300' />
				<div className='h-4 w-10/12 animate-pulse rounded-md bg-slate-300' />
			</div>
		</div>
	)
}

export default FallbackProfileNavList
