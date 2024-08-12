import { queryOptions } from '@tanstack/react-query'

import { getMostPopularMovies } from 'shared/api/movie'

export const mostPopularMoviesQueryOptions = queryOptions({
	queryKey: ['Popular movies in sidebar'],
	queryFn: () => getMostPopularMovies(),
})
