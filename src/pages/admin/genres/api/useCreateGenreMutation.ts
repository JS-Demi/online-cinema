import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { createGenre } from 'shared/api/genres'
import { toastError } from 'shared/lib/handleError'

export const useCreateGenreMutation = () => {
	const router = useRouter()
	return useMutation({
		mutationKey: ['create genre'],
		mutationFn: () => createGenre(),
		onSuccess: (id) => {
			toast.success('Create genre', {
				description: 'Genre created successfully',
			})
			router.push(`/manage/genres/edit/${id}`)
		},
		onError: (err) => {
			toastError(err, 'Create genre')
		},
	})
}
