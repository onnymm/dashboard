import { useEffect, useRef } from 'react'
import { useClickOutside } from '../../custom hooks/useClickOutside'

const Modal = ({
	name,
	isShown,
	setIsShown,
	inputValue,
	onInputChange,
	onButtonClick
}) => {
	const handleClickOutside = () => {
		setIsShown(false)
	}

	const domNode = useClickOutside(handleClickOutside)
	const inputRef = useRef(null)

	useEffect(() => {
		if (isShown) {
			inputRef.current?.focus() // Focus input when modal is shown

			const handleKeyDown = e => {
				if (e.key === 'Escape') {
					setIsShown(false) // Close modal on Escape key press
				}
			}

			document.addEventListener('keydown', handleKeyDown)

			// Clean up event listener when modal is hidden
			return () => {
				document.removeEventListener('keydown', handleKeyDown)
			}
		}
	}, [isShown, setIsShown])

	return (
		<>
			{isShown && (
				<div className='fixed z-50 -m-4 -mt-20 flex size-full max-w-feed-width items-center justify-center backdrop-blur-sm'>
					<div
						ref={domNode}
						className='flex flex-col items-center gap-y-2 rounded-sm bg-cyan-950 px-4 py-2 shadow-md'
					>
						<input
							ref={inputRef}
							type='text'
							placeholder={`Write new ${name} title...`}
							value={inputValue}
							className='rounded-sm bg-slate-200 px-2 py-1 text-slate-800 shadow-md focus:outline-none'
							onChange={e => onInputChange(e.target.value)}
							onKeyDown={e => e.key === 'Enter' && onButtonClick()}
						/>
						<button
							className='w-max rounded-md bg-cyan-800 px-2 py-1 font-semibold text-white transition-colors hover:bg-cyan-700'
							onClick={onButtonClick}
						>
							{`Add ${name}`}
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
