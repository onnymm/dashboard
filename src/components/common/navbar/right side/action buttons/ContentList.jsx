import { capitalizeFirstLetter } from '../../../../../utils/utils'
import List from '../../../../ui/List'
import Message from '../../../../ui/Message'
import Notification from '../../../../ui/Notification'

const FORMAT_LIST = { messages: Message, notifications: Notification }

const ContentList = ({ name, data }) => {
	const Contains = FORMAT_LIST[name]

	return (
		<div className='flex max-h-80 flex-col overflow-hidden rounded-md shadow-back'>
			<div className='transition-color sticky top-0 z-10 bg-white p-3 text-sm duration-300 dark:bg-navbar-icons-background-d'>
				{/* Header del bloque de contenido */}
				<span className='transition-color opacity-80 duration-300 dark:text-white'>
					{capitalizeFirstLetter(name)}
				</span>
			</div>
			<div className='transition-color divide-transparent overflow-y-auto bg-slate-100 duration-300 dark:bg-darkmode-switch-background-d'>
				{/* Generador de lista */}
				<List
					Contains={Contains}
					data={data}
					name={name}
					extraStyles='divide-y-2 divide-white dark:divide-slate-800'
				/>
			</div>
		</div>
	)
}

export default ContentList
