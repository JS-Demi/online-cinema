import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { createMovie } from 'shared/api/movie'
import { toastError } from 'shared/lib/handleError'

export const useCreateMovie = () => {
	const router = useRouter()
	return useMutation({
		mutationKey: ['create movie'],
		mutationFn: () => createMovie(),
		onSuccess: (id) => {
			toast.success('Create movie', {
				description: 'Movie created successfully',
			})
			router.push(`/manage/movies/edit/${id}`)
		},
		onError: (err) => {
			toastError(err, 'Create movie')
		},
	})
}
