import { EllipsisVerticalIcon, EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import IconButton from "../components/ui kit/buttons/IconButton";

const ActionButtons = () => {

    return (
        <div className="flex flex-row gap-2">
            <IconButton icon={EyeIcon} type={'primary'} size={'sm'} />
            <IconButton icon={PencilIcon} type={'success'} size={'sm'}/>
            <IconButton icon={TrashIcon} type={'danger'} size={'sm'}/>
            <IconButton icon={EllipsisVerticalIcon} type={'secondary'} size={'sm'}/>
        </div>
    )
}

export default ActionButtons;