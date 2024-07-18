import { NavLink } from 'react-router-dom'

const SidebarSection = ({ children, icon: Icon }) => {
	return (
		<NavLink
			to='dashboard'
			className={({ isActive }) =>
				`${isActive ? 'bg-sidebar-section-hover' : ''}`
			}
		>
			<div className='flex gap-2 rounded-sm px-5 py-2 text-white transition duration-300 hover:bg-sidebar-section-hover dark:hover:bg-sidebar-section-hover-d'>
				<Icon className='size-6 opacity-80' />
				<span className='leading-relaxed opacity-80'>{children}</span>
			</div>
		</NavLink>
	)
}

export default SidebarSection
