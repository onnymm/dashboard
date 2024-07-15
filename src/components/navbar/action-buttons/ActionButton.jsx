import { useState } from 'react'
import { NavbarActionButtonContext } from '../../../contexts/NavbarActionButtonContext'
import Button from './Button'
import ContentList from './ContentList'

const ActionButton = ({ name, icon, data, contains }) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<>
			<div className='relative'>
				<Button icon={icon} isActive={isActive} setIsActive={setIsActive} />
				<NavbarActionButtonContext.Provider value={{ name, data, contains }}>
					<ContentList
						name={name}
						content={data}
						contains={contains}
						isActive={isActive}
					/>
				</NavbarActionButtonContext.Provider>
			</div>
		</>
	)
}

export default ActionButton
