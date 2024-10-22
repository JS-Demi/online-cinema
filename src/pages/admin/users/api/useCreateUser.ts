import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { createUser } from 'shared/api/user'
import { toastError } from 'shared/lib/handleError'

export const useCreateUser = () => {
	const router = useRouter()
	return useMutation({
		mutationKey: ['create user'],
		mutationFn: () => createUser(),
		onSuccess: (id) => {
			toast.success('Create user', {
				description: 'User created successfully',
			})
			router.push(`/manage/users/edit/${id}`)
		},
		onError: (err) => {
			toastError(err, 'Create user')
		},
	})
}
