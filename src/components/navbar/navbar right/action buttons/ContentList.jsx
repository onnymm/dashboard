import { useContext } from 'react'
import { ContentListContext } from '../../../../contexts/NavbarActionButtonsContexts'
import { capitalizeFirstLetter } from '../../../../utils/dataFormatting'
import List from '../../../ui kit/List'

const ContentList = () => {
	const {
		name,
		data: data,
		contains: Contains
	} = useContext(ContentListContext)

	return (
		<div className='absolute max-h-80 sm:top-10 top-11 -right-32 flex flex-col w-72 sm:w-80 shadow-back rounded-xl overflow-hidden'>
			<div className='sticky top-0 text-sm p-3 bg-white dark:bg-navbar-icons-background-d z-10 transition-color duration-300'>
				<span className='opacity-80 dark:text-white transition-color duration-300'>
					{capitalizeFirstLetter(name)}
				</span>
			</div>
			<div className='overflow-y-auto transition-color duration-300 bg-feed-background dark:bg-darkmode-switch-background-d dark:divide-navbar-icons-background-d'>
				<List Contains={Contains} data={data} name={name} />
			</div>
		</div>
	)
}

export default ContentList
