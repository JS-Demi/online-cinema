'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'

import { Account, useAccountMutation } from 'widgets/account'

import { login } from 'shared/api/account'
import { IAccountFields } from 'shared/types'
import { MdMaterialIcon } from 'shared/ui'

interface ISignIn {}

export const SignIn: FC<ISignIn> = () => {
	const { mutate: signIn, isPending } = useAccountMutation(login, 'Sign In')
	const handleSubmit: SubmitHandler<IAccountFields> = (data) => {
		signIn(data)
	}
	const searchParams = useSearchParams()
	const redirect = searchParams?.has('redirect') ? `?${searchParams}` : ''
	return (
		<Account
			title="Sign In"
			onSubmit={handleSubmit}
			isPasswordRequired
			isLoading={isPending}
		>
			<span className="mr-2">{`Don't have an account?`}</span>
			<Link href={`/account${redirect}`}>
				<span>Create yours now</span>
			</Link>
		</Account>
	)
}
