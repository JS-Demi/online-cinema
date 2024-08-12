'use client'

import axios from 'axios'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'

import { Account, useAccountMutation } from 'widgets/account'

import { register } from 'shared/api/account'
import { IAccountFields } from 'shared/types'

interface ISignUp {}

export const SignUp: FC<ISignUp> = () => {
	const { mutate: create, isPending } = useAccountMutation(register, 'Register')
	const handleSubmit: SubmitHandler<IAccountFields> = (data) => {
		create(data)
		axios.post('/api/register', data)
	}
	const searchParams = useSearchParams()
	const redirect = searchParams?.has('redirect') ? `?${searchParams}` : ''
	return (
		<Account
			title="Create account"
			onSubmit={handleSubmit}
			isPasswordRequired
			isLoading={isPending}
		>
			<span className="mr-2">{`Already have an account?`}</span>
			<Link href={`/sign-in${redirect}`}>Sign In</Link>
		</Account>
	)
}
