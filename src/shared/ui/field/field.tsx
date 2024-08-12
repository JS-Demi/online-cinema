'use client'

import cn from 'classnames'
import { FC, InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './field.module.scss'

interface IField extends InputHTMLAttributes<HTMLInputElement> {
	error?: FieldError | undefined
}

export const Field: FC<IField> = forwardRef<HTMLInputElement, IField>(
	(props, ref) => {
		const {
			error,
			type = 'text',
			placeholder,
			style,
			className,
			...rest
		} = props
		return (
			<div className={cn(styles.common, styles.field, className)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...rest} />
				</label>
				{error && <span className={styles.error}>{error.message}</span>}
			</div>
		)
	}
)

Field.displayName = 'Field'
