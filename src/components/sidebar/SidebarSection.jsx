import { NavLink } from 'react-router-dom'

const SidebarSection = ({ label, route, icon: Icon, setter }) => {
	return (
		<NavLink
			to={route}
			className={({ isActive }) =>
				`${isActive ? 'bg-sidebar-section-hover shadow-md' : ''} mb-1 hover:shadow-md`
			}
			onClick={() => setter(false)}
		>
			<div className='flex gap-2 rounded-sm px-5 py-2 text-white transition duration-300 hover:bg-sidebar-section-hover dark:hover:bg-sidebar-section-hover-d'>
				<Icon className='size-6 opacity-80' />
				<span className='leading-relaxed opacity-80'>{label}</span>
			</div>
		</NavLink>
	)
}

export default SidebarSection
