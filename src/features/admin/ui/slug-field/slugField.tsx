'use client'

import cn from 'classnames'
import { FC } from 'react'
import {
	Control,
	Controller,
	FieldError,
	UseFormRegister,
} from 'react-hook-form'

import { Field } from 'shared/ui'

import styles from './slugField.module.scss'

interface ISlugField {
	readonly error?: FieldError
	readonly control: Control<any>
	readonly generate: () => void
	readonly className?: string
}

export const SlugField: FC<ISlugField> = ({
	generate,
	error,
	control,
	className,
}) => {
	return (
		<div className={cn('relative', className)}>
			<Controller
				name={'slug'}
				rules={{ required: 'Slug is required' }}
				control={control}
				render={({ field }) => (
					<Field placeholder="Slug" {...field} error={error} />
				)}
			/>
			<div className={styles.badge} onClick={generate} role="button">
				generate
			</div>
		</div>
	)
}
