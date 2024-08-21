import Kanban from '../components/ui/kanban/Kanban'
import UserList from '../components/ui/vertical scroll list/UserList'

const ToDo = () => {
	return (
		<div className='flex flex-grow gap-4'>
			<div className='custom-gridrow'>
				<Kanban />
				<UserList />
			</div>
		</div>
	)
}

export default ToDo
