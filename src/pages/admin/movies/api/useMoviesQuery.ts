import { useQuery } from '@tanstack/react-query'

import { getMovies } from 'shared/api/movie'
import { getAdminUrl } from 'shared/lib/utils'
import { IAdminData } from 'shared/types'

export const useMoviesQuery = (debouncedSearch: string) => {
	return useQuery({
		queryKey: ['movie list', debouncedSearch],
		queryFn: () => getMovies(),
		select: (data) =>
			data.map(
				(movie): IAdminData => ({
					_id: movie._id,
					editUrl: getAdminUrl(`movies/edit/${movie._id}`),
					items: [movie.title, movie.genres[0].name, String(movie.rating)],
				})
			),
	})
}
