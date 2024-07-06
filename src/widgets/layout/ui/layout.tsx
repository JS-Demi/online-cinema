'use client'

import { FC } from 'react'
import styles from './layout.module.scss'
import { Navigation } from './navigation'
import { Sidebar } from './sidebar'

interface ILayout {
	readonly children: JSX.Element
}

export const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.content}>{children}</div>
			<Sidebar />
		</div>
	)
}
