'use client'

import { FC } from 'react'
import styles from './sidebar.module.scss'
import { PopularMovies, Search } from 'features/sidebar'

interface ISidebar {}

export const Sidebar: FC<ISidebar> = () => {
	return (
		<section className={styles.sidebar}>
			<Search />
			<PopularMovies />
		</section>
	)
}
