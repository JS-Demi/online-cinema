import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { removeMovie } from 'shared/api/movie'
import { toastError } from 'shared/lib/handleError'

export const useRemoveMovieMutation = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: (movieId: string) => removeMovie(movieId),
		onSuccess: () => {
			toast.success('Remove movie', {
				description: 'Movie removed successfully',
			})
			client.invalidateQueries({ queryKey: ['movie list'] })
		},
		onError: (err) => {
			toastError(err, 'Remove movie')
		},
	})
}
