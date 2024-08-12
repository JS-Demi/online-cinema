'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from 'shared/api/movie'
import { getMovieUrl } from 'shared/lib/utils'

import styles from './dropdownSearchItem.module.scss'

interface IDropDownSearchItem {
	movie: IMovie
}

export const DropDownSearchItem: FC<IDropDownSearchItem> = ({ movie }) => {
	return (
		<Link href={getMovieUrl(movie.slug)} className={styles.link}>
			<Image
				src={movie.poster}
				width={50}
				height={50}
				alt={movie.title}
				objectFit="cover"
				objectPosition="top"
				draggable={false}
			/>
			<span>{movie.title}</span>
		</Link>
	)
}
