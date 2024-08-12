'use client'

import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from 'shared/api/movie'

import { MovieItem } from './movieItem'
import styles from './movieList.module.scss'

interface IMovieList {
	title: string
	link: string
	movies: IMovie[]
}

export const MovieList: FC<IMovieList> = ({ link, movies, title }) => {
	return (
		<div className={styles.list}>
			<h3 className={styles.heading}>{title}</h3>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link} className={styles.button}>
				See more
			</Link>
		</div>
	)
}
