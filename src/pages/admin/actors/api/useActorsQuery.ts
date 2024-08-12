import { useQuery } from '@tanstack/react-query'

import { getActors } from 'shared/api/actor'
import { getAdminUrl } from 'shared/lib/utils'
import { IAdminData } from 'shared/types'

export const useActorsQuery = (debouncedSearch: string) => {
	return useQuery({
		queryKey: ['actor list', debouncedSearch],
		queryFn: () => getActors(debouncedSearch),
		select: (data) =>
			data.map(
				(actor): IAdminData => ({
					_id: actor._id,
					editUrl: getAdminUrl(`actors/edit/${actor._id}`),
					items: [actor.name, actor.countMovies],
				})
			),
	})
}
