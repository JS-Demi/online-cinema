'use client'

import { FC } from 'react'

import { CountUsers, PopularMovie } from 'entities/admin'

interface IStatistics {}

export const Statistics: FC<IStatistics> = () => {
	return (
		<div className="flex items-stretch justify-between mt-10">
			<CountUsers />
			<PopularMovie />
		</div>
	)
}
