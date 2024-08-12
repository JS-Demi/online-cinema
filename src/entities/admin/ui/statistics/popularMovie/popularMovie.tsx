'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie, getMostPopularMovies } from 'shared/api/movie'
import { getMovieUrl } from 'shared/lib/utils'
import { SkeletonLoader, SubHeading } from 'shared/ui'

interface IPopularMovie {}

export const PopularMovie: FC<IPopularMovie> = () => {
	const {
		data: movie,
		isLoading,
		isSuccess,
	} = useQuery({
		queryKey: ['Popular movie in statistics'],
		queryFn: getMostPopularMovies,
		select: (data): IMovie => data[0],
	})
	return (
		<div className="air-block w-2/5 text-center p-5 flex flex-col  justify-between">
			<SubHeading title="The most popular movie" />
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<h3 className="opacity-50 font-medium mb-3">{`Opened ${movie.countOpened} times`}</h3>
						<Link
							href={getMovieUrl(movie.slug)}
							className="h-44 w-full relative"
						>
							<Image
								fill
								src={movie.bigPoster}
								alt={movie.title}
								className="rounded-layout shadow-lg image-like-bg"
								unoptimized
							/>
						</Link>
					</>
				)
			)}
		</div>
	)
}
