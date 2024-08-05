import { FallbackContentList } from '../../components/navbar/right side/action buttons/FallbackContentList'
import FallbackProfileNavList from '../../components/navbar/right side/profile/FallbackProfileNavList'

const UiTests = () => {
	return (
		<div className='flex flex-grow items-center justify-center text-center'>
			<FallbackProfileNavList />
			<div className='w-80'>
				<FallbackContentList numberOfElements={3} />
			</div>
		</div>
	)
}

export default UiTests
