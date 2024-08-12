'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { FC } from 'react'

import { mostPopularMoviesQueryOptions } from 'features/sidebar/api/popularMovies'

import { MovieList } from 'entities/sidebar'

import { SkeletonLoader } from 'shared/ui'

interface IPopularMovies {}

export const PopularMovies: FC<IPopularMovies> = () => {
	const { data, isLoading } = useSuspenseQuery(mostPopularMoviesQueryOptions)
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList link="trending" movies={data || []} title="Popular Movies" />
	)
}
