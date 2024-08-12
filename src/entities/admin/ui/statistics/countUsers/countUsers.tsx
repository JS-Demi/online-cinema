'use client'

import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import { getCountUsers } from 'shared/api/user'
import { SkeletonLoader } from 'shared/ui'

interface ICountUsers {}

export const CountUsers: FC<ICountUsers> = () => {
	const {
		isLoading,
		data: usersCount,
		isSuccess,
	} = useQuery({
		queryKey: ['Count users'],
		queryFn: getCountUsers,
	})
	return (
		<div className="air-block w-2/5 flex items-center justify-center text-center">
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					isSuccess && (
						<>
							<p className="text-7xl mb-1 font-medium">{usersCount}</p>
						</>
					)
				)}
				<p className="opacity-70 font-medium">users</p>
			</div>
		</div>
	)
}
