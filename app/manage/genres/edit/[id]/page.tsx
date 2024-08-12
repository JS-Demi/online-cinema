import {
	HydrationBoundary,
	dehydrate,
	useQueryClient,
} from '@tanstack/react-query'
import type { Metadata } from 'next'

import { getQueryClient } from 'app/providers/react-query'

import { EditGenre } from 'widgets/admin'

import { getGenreById } from 'shared/api/genres'

export const metadata: Metadata = {
	title: 'Manage | Edit Genre',
}

export default async function Page({ params }: { params: { id: string } }) {
	const genreId = params.id
	const queryClient = getQueryClient()
	await queryClient.prefetchQuery({
		queryKey: ['genre', genreId],
		queryFn: () => getGenreById(genreId),
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<EditGenre genreId={genreId} />
		</HydrationBoundary>
	)
}
