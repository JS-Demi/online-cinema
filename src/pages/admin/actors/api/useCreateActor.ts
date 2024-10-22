import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { createActor } from 'shared/api/actor'
import { toastError } from 'shared/lib/handleError'

export const useCreateActor = () => {
	const router = useRouter()
	return useMutation({
		mutationKey: ['create actor'],
		mutationFn: () => createActor(),
		onSuccess: (id) => {
			toast.success('Create actor', {
				description: 'Actor created successfully',
			})
			router.push(`/manage/actors/edit/${id}`)
		},
		onError: (err) => {
			toastError(err, 'Create actor')
		},
	})
}
