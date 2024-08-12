import { useQuery } from '@tanstack/react-query'

import { getMovies } from 'shared/api/movie'

export const useSearchMovieQuery = (debouncedSearch: string) => {
	return useQuery({
		queryKey: ['search movie list', debouncedSearch],
		queryFn: () => getMovies(debouncedSearch),
		enabled: !!debouncedSearch,
	})
}
