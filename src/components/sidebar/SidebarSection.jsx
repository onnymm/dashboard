import { NavLink } from 'react-router-dom'

const SidebarSection = ({ children, icon: Icon }) => {
	return (
		<NavLink
			to='dashboard'
			className={({ isActive }) =>
				`rounded-sm ${isActive ? 'bg-sidebar-section-hover' : ''}`
			}
		>
			<div className='flex gap-2 px-5 py-2 rounded-sm hover:bg-sidebar-section-hover transition duration-300'>
				<Icon className='size-6 stroke-sidebar-section' />
				<span className='leading-relaxed fill-sidebar-section text-sidebar-section'>
					{children}
				</span>
			</div>
		</NavLink>
	)
}

export default SidebarSection
