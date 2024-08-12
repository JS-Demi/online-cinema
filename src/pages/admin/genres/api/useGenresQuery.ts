import { useQuery } from '@tanstack/react-query'

import { getGenres } from 'shared/api/genres'
import { getUsers } from 'shared/api/user'
import { convertMongoDate, getAdminUrl } from 'shared/lib/utils'
import { IAdminData } from 'shared/types'

export const useGenresQuery = (debouncedSearch: string) => {
	return useQuery({
		queryKey: ['genre list', debouncedSearch],
		queryFn: () => getGenres(debouncedSearch),
		select: (data) =>
			data.map(
				(genre): IAdminData => ({
					_id: genre._id,
					editUrl: getAdminUrl(`genres/edit/${genre._id}`),
					items: [genre.name, genre.slug],
				})
			),
	})
}
