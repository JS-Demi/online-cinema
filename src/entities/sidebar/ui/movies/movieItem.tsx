'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from 'shared/api/movie'
import { getGenresListEach } from 'shared/lib/genres'
import { getGenreUrl, getMovieUrl } from 'shared/lib/utils'
import { MdMaterialIcon } from 'shared/ui'

import styles from './movieList.module.scss'

interface IMovieItem {
	movie: IMovie
}

export const MovieItem: FC<IMovieItem> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					width={65}
					height={97}
					src={movie.poster}
					alt={movie.title}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((genre, idx) => (
						<Link key={genre._id} href={getGenreUrl(genre.slug)}>
							{getGenresListEach(idx, movie.genres.length, genre.name)}
						</Link>
					))}
				</div>
				<div className={styles.rating}>
					<MdMaterialIcon icon="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}
