import { useQuery } from '@tanstack/react-query'

import { getUsers } from 'shared/api/user'
import { convertMongoDate, getAdminUrl } from 'shared/lib/utils'
import { IAdminData } from 'shared/types'

export const useUsersQuery = (debouncedSearch: string) => {
	return useQuery({
		queryKey: ['users list', debouncedSearch],
		queryFn: () => getUsers(debouncedSearch),
		select: (data) =>
			data.map(
				(user): IAdminData => ({
					_id: user._id,
					editUrl: getAdminUrl(`users/edit/${user._id}`),
					items: [user.email, convertMongoDate(user.createdAt)],
				})
			),
	})
}
