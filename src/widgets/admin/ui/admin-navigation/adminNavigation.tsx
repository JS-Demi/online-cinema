'use client'

import { FC } from 'react'

import { AdminNavItem } from 'entities/admin'

import { ADMIN_NAV_ITEMS } from 'shared/constants'

import styles from './adminNavigation.module.scss'

interface IAdminNavigation {}

export const AdminNavigation: FC<IAdminNavigation> = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{ADMIN_NAV_ITEMS.map((item) => (
					<AdminNavItem key={item.link} title={item.title} link={item.link} />
				))}
			</ul>
		</nav>
	)
}
