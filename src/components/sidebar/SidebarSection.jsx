import { NavLink } from 'react-router-dom'

const SidebarSection = ({ children, icon: Icon }) => {
	return (
		<NavLink
			to='dashboard'
			className={({ isActive }) =>
				`rounded-sm ${isActive ? 'bg-sidebar-section-hover' : ''}`
			}
		>
			<div className='flex gap-2 px-5 py-2 text-white rounded-sm hover:bg-sidebar-section-hover dark:hover:bg-sidebar-section-hover-d transition duration-300'>
				<Icon className='size-6 opacity-80' />
				<span className='leading-relaxed opacity-80'>{children}</span>
			</div>
		</NavLink>
	)
}

export default SidebarSection
