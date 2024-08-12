'use client'

import cn from 'classnames'
import { FC } from 'react'
import Spinner from 'react-spinners/BeatLoader'

import { TMaterialIconName } from 'shared/types'

import { MdMaterialIcon } from '../MaterialIcon/MdMaterialIcon'
import styles from './button.module.scss'

interface IButton {
	readonly children: string
	readonly type?: 'button' | 'submit'
	readonly icon?: TMaterialIconName
	readonly isLoading?: boolean
	readonly onClick?: () => void
	readonly className?: string
}

export const Button: FC<IButton> = (props) => {
	const {
		children,
		type = 'button',
		isLoading,
		onClick,
		className,
		icon,
	} = props
	return (
		<button
			className={cn(styles.button, className)}
			type={type}
			disabled={isLoading}
			onClick={onClick}
		>
			{!isLoading && icon && <MdMaterialIcon icon={icon} />}
			{isLoading && (
				<Spinner
					size={'0.5rem'}
					color={'white'}
					loading
					aria-label="loading-spinner"
				/>
			)}

			<span className="text-lg">{children}</span>
		</button>
	)
}
