'use client'

import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react'
import cn from 'classnames'
import styles from './input.module.scss'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	readonly className?: string
}

export const Input: FC<IInput> = (props) => {
	const { onChange, value, placeholder, className, onBlur, onFocus } = props

	const [inputData, setInputData] = useState<string>('')
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputData(e.target.value)
	}
	return (
		<input
			className={cn(className)}
			value={value ?? inputData}
			onChange={onChange ?? handleChange}
			placeholder={placeholder}
			type="text"
			onBlur={onBlur}
			onFocus={onFocus}
		/>
	)
}
