import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline'

const LockToggle = ({ state, setter }) => {
	return (
		<button
			className={`${state ? 'bg-slate-900 shadow-md dark:bg-sidebar-background' : ''} ml-auto mt-auto hidden rounded-md p-2 text-white transition duration-500 hover:bg-slate-900 hover:shadow-md hover:dark:bg-sidebar-background md:block`}
			onClick={() => setter && setter(!state)}
		>
			{state ? (
				<LockClosedIcon className='size-5' />
			) : (
				<LockOpenIcon className='size-5' />
			)}
		</button>
	)
}

export default LockToggle
