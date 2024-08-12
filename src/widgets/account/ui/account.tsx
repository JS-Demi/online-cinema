'use client'

import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { EMAIL_REGEX } from 'shared/constants'
import { IAccountFields } from 'shared/types'
import { Button, Field } from 'shared/ui'
import { Heading } from 'shared/ui/heading'

import styles from './account.module.scss'

interface IAccount {
	readonly title: string
	readonly isLoading?: boolean
	readonly onSubmit: (values: IAccountFields) => void
	readonly isPasswordRequired?: boolean
	readonly children?: React.ReactNode
}

export const Account: FC<IAccount> = ({
	title,
	onSubmit,
	isPasswordRequired = false,
	children,
}) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IAccountFields>({
		mode: 'onChange',
		defaultValues: { email: '', password: '' },
	})
	return (
		<section className={styles.account}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Heading title={title} className="mb-12" />
				<Controller
					name="email"
					control={control}
					rules={{
						required: 'Email is required',
						pattern: {
							value: EMAIL_REGEX,
							message: 'Please enter a valid email',
						},
					}}
					render={({ field }) => (
						<Field {...field} placeholder="e-mail" error={errors.email} />
					)}
				/>
				<Controller
					name="password"
					control={control}
					rules={
						isPasswordRequired
							? {
									required: 'Password is required',
									minLength: {
										value: 6,
										message: 'Enter at least 6 characters',
									},
								}
							: {}
					}
					render={({ field }) => (
						<Field
							{...field}
							type="password"
							placeholder="password"
							error={errors.password}
						/>
					)}
				/>

				<Button type="submit" isLoading={false}>
					{title}
				</Button>
				{children && <div className={styles.footer}>{children}</div>}
			</form>
		</section>
	)
}
