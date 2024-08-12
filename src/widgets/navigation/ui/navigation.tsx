'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { FC } from 'react'

import { NavigationGroup } from 'features/navigation'

import { Logo, popularGenresQueryOptions } from 'entities/navigation'

import { GENERAL } from 'shared/constants/general'
import { MENU } from 'shared/constants/menu'
import { ISession, IUser } from 'shared/types'
import { SkeletonLoader } from 'shared/ui'

import styles from './navigation.module.scss'

interface INavigation {
	readonly session: ISession | null
}

export const Navigation: FC<INavigation> = ({ session }) => {
	const { data, isLoading } = useSuspenseQuery(popularGenresQueryOptions)
	const genres = { title: 'Popular Genres', items: data ?? [] }
	return (
		<nav className={styles.navigation}>
			<Logo />
			<NavigationGroup data={MENU} />
			{isLoading ? (
				<div className="mr-12 mb-6">
					<SkeletonLoader count={5} className="h-7 mb-6" />
				</div>
			) : (
				<NavigationGroup data={genres} />
			)}
			<NavigationGroup data={GENERAL} session={session} />
		</nav>
	)
}
