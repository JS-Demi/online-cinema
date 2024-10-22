import { queryOptions } from '@tanstack/react-query'

import { getGenres } from 'shared/api/genres'
import { getGenreUrl } from 'shared/lib/utils'
import { INavItem } from 'shared/types'

export const popularGenresQueryOptions = queryOptions({
	queryKey: ['popular-genres'],
	queryFn: async () => await getGenres(),
	select: (data) =>
		data
			.filter((genre) => genre.icon)
			.map(
				({ icon, name, slug }) =>
					({
						icon: icon,
						link: getGenreUrl(slug),
						title: name,
					}) as INavItem
			)
			.slice(0, 4),
})
