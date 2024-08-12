import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { removeActor } from 'shared/api/actor'
import { removeUser } from 'shared/api/user'
import { toastError } from 'shared/lib/handleError'

export const useRemoveActorMutation = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: (actorId: string) => removeActor(actorId),
		onSuccess: () => {
			toast.success('Remove actor', {
				description: 'Actor removed successfully',
			})
			client.invalidateQueries({ queryKey: ['actor list'] })
		},
		onError: (err) => {
			toastError(err, 'Remove actor')
		},
	})
}
