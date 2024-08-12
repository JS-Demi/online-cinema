'use client'

import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { IAdminNavItem } from 'shared/types'

import styles from './adminNavItem.module.scss'

export const AdminNavItem: FC<IAdminNavItem> = ({ title, link }) => {
	const pathname = usePathname()
	return (
		<li className={styles.link}>
			<Link
				href={link}
				className={cn({
					[styles.active]: pathname === link,
				})}
			>
				{title}
			</Link>
		</li>
	)
}
