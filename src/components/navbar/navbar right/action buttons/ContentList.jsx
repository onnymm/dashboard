import { useContext } from 'react'
import { ContentListContext } from '../../../../contexts/NavbarActionButtonsContexts'
import { capitalizeFirstLetter } from '../../../../utils/utils'
import List from '../../../ui kit/List'

const ContentList = () => {
	const {
		name,
		data: data,
		contains: Contains
	} = useContext(ContentListContext)

	return (
		<div className='absolute -right-0 top-14 flex max-h-80 w-54 flex-col overflow-hidden rounded-xl shadow-back sm:top-12 sm:w-80'>
			<div className='transition-color sticky top-0 z-10 bg-white p-3 text-sm duration-300 dark:bg-navbar-icons-background-d'>
				{/* Header del bloque de contenido */}
				<span className='transition-color opacity-80 duration-300 dark:text-white'>
					{capitalizeFirstLetter(name)}
				</span>
			</div>
			<div className='transition-color overflow-y-auto bg-feed-background duration-300 dark:divide-navbar-icons-background-d dark:bg-darkmode-switch-background-d'>
				{/* Generador de lista */}
				<List Contains={Contains} data={data} name={name} />
			</div>
		</div>
	)
}

export default ContentList
