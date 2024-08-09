import {
	BeakerIcon,
	ListBulletIcon,
	Squares2X2Icon,
	UserIcon
} from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { AppContext } from '../../../contexts/AppContexts'
import { SidebarContext } from '../../../contexts/SidebarContext'
import { DASHBOARD_LINKS, TASKS_LINKS } from '../../../data/appConfig'
import List from '../../ui kit/List'
import LockToggle from '../../ui kit/LockToggle'
import StickySectionTag from '../../ui kit/StickySectionTag'
import SidebarDropdown from './SidebarDropdown'
import SidebarSection from './SidebarSection'

// Función para cálculo de altura dependiendo del número de elementos contenidos
const calculateHeight = content => {
	return content.length * 2 //rem
	/* 
	Por cada elemento contenido se devuelven 2 unidades,
	en el caso de los del dropdown, dos por elemento. El
	estilo dentro del componente dropdown maneja rems.
	*/
}

// Contenido de la lista generadora de dropdowns
const SIDEBAR_DROPDOWNS = [
	{
		id: 1, // Id (se usará como llave)
		icon: Squares2X2Icon, // Ícono
		label: 'Dashboard', // Etiqueta (título, texto)
		content: DASHBOARD_LINKS, // Objeto con las rutas contenidas, a partir de este se creará una segunda lista de navlinks dentro del dropdown
		height: calculateHeight(DASHBOARD_LINKS) // Se calcula la altura del contenedor de la lista, se usaron valores fijos para poder animar transición de altura
	},
	{
		id: 2,
		icon: ListBulletIcon,
		label: 'Tasks',
		content: TASKS_LINKS,
		height: calculateHeight(TASKS_LINKS)
	}
]

const SidebarContent = () => {
	const { setIsOpen } = useContext(SidebarContext)
	const { sidebarIsLocked, setSidebarIsLocked } = useContext(AppContext)

	const closeSidebar = () => {
		setIsOpen(false)
	}

	return (
		<>
			{/* 
			El contenido de la sidebar tiene scroll oculto, en caso de haber un exceso de objetos, se mantiene
			limitado al área que se le asigna
			*/}
			<div className='no-scrollbar flex flex-col overflow-y-auto rounded-sm px-2 pb-2'>
				{/* Etiqueta de sección */}
				<StickySectionTag>MENU</StickySectionTag>
				{/* Lista generadora de componentes */}
				<List
					Contains={SidebarDropdown}
					data={SIDEBAR_DROPDOWNS}
					name='Dropdowns'
					handleContentClick={closeSidebar}
					/* 
					El setter se pasa aquí para que los navlinks contenidos dentro de él
					puedan darle uso, y cerrar la sidebar cuando se haga click en ellos
					*/
				/>
				{/* Navlink estilizado */}
				<SidebarSection
					icon={UserIcon}
					label='Profile'
					route='profile'
					handleClick={closeSidebar}
				/>
				{/* Etiqueta de sección */}
				<StickySectionTag>EXTRA</StickySectionTag>
				{/* Navlink estilizado */}
				<SidebarSection
					icon={BeakerIcon}
					label='UI Tests'
					route='ui-tests'
					handleClick={closeSidebar}
				/>
			</div>
			{/* Botón candado, controlador del bloqueo de sidebar */}
			<LockToggle state={sidebarIsLocked} setter={setSidebarIsLocked} />
		</>
	)
}

export default SidebarContent
