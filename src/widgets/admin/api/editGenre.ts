'use client'

import { queryOptions, useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { type IGenreEdit, updateGenre } from 'shared/api/genres'
import { getGenreById } from 'shared/api/genres'
import { toastError } from 'shared/lib/handleError'

export const useEditGenreMutation = (_id: string) => {
	const router = useRouter()
	return useMutation({
		mutationFn: (data: IGenreEdit) => updateGenre(_id, data),
		onSuccess: () => {
			toast.success('Edit genre', { description: 'Genre updated successfully' })
			router.push('/manage/genres')
		},
		onError: (err) => {
			toastError(err, 'Edit genre')
		},
	})
}

export const genreOptions = (_id: string) => {
	return queryOptions({
		queryKey: ['genre', _id],
		queryFn: () => getGenreById(_id),
	})
}
