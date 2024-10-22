import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { removeGenre } from 'shared/api/genres'
import { toastError } from 'shared/lib/handleError'

export const useRemoveGenreMutation = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: (genreId: string) => removeGenre(genreId),
		onSuccess: () => {
			toast.success('Remove genre', {
				description: 'Genre removed successfully',
			})
			client.invalidateQueries({ queryKey: ['genre list'] })
		},
		onError: (err) => {
			toastError(err, 'Remove genre')
		},
	})
}
