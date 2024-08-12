'use client'

import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

import { login, register } from 'shared/api/account'
import { api, apiTest } from 'shared/api/base'
import { createSession } from 'shared/lib/auth'
import { toastError } from 'shared/lib/handleError'
import { IAccountFields } from 'shared/types'

type TMutationFn = typeof register | typeof login

export const useAccountMutation = (
	mutationFn: TMutationFn,
	action: 'Sign In' | 'Register'
) => {
	const searchParams = useSearchParams()
	const redirect = searchParams?.get('redirect')
	const nextUrl = redirect ? redirect : '/'
	return useMutation({
		mutationFn,
		onSuccess: (res) => {
			toast.success(action, { description: 'Completed successfully' })
			createSession(res, nextUrl)
		},
		onError: (err) => {
			console.log(err)
			toastError(err, `${action} Error`)
		},
	})
}
