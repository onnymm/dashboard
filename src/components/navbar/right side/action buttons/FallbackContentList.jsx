export const FallbackContentList = ({ numberOfElements = 0 }) => {
	return (
		<div className='flex max-h-80 flex-col overflow-hidden rounded-md shadow-back'>
			<div className='transition-color sticky top-0 h-11 bg-white text-sm duration-300 dark:bg-navbar-icons-background-d' />
			<div className='flex flex-col gap-2 overflow-y-auto bg-slate-100 duration-300 dark:bg-darkmode-switch-background-d'>
				{/* Nos aseguramos que siempre muestre por lo menos una entrada de skeleton */}
				{[...Array(numberOfElements + 1)].map((_, index) => (
					<div
						key={index}
						className='flex w-full items-center gap-4 p-4 dark:opacity-50'
					>
						<div className='aspect-square w-2/12 animate-pulse rounded-md bg-slate-300' />
						<div className='flex w-10/12 flex-col gap-2'>
							<div className='h-3 w-3/4 animate-pulse rounded-md bg-slate-300' />
							<div className='h-2 animate-pulse rounded-md bg-slate-300' />
							<div className='h-2 animate-pulse rounded-md bg-slate-300' />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
