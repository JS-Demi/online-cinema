import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { removeUser } from 'shared/api/user'
import { toastError } from 'shared/lib/handleError'

export const useRemoveUserMutation = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: (userId: string) => removeUser(userId),
		onSuccess: () => {
			toast.success('Remove user', { description: 'User removed successfully' })
			client.invalidateQueries({ queryKey: ['users list'] })
		},
		onError: (err) => {
			toastError(err, 'Remove user')
		},
	})
}
