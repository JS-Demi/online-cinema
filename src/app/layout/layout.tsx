'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { FC } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Toaster } from 'sonner'

import { Navigation } from 'widgets/navigation'
import { Sidebar } from 'widgets/sidebar'

import { accentColor } from 'shared/constants'
import { ISession, IUser } from 'shared/types'

import styles from './layout.module.scss'

interface ILayout {
	readonly children: React.ReactNode
	readonly session: ISession | null
}

export const Layout: FC<ILayout> = ({ children, session }) => {
	return (
		<div className={styles.layout}>
			<ProgressBar
				color={accentColor}
				height="4px"
				options={{ showSpinner: false }}
				shallowRouting
			/>
			<SkeletonTheme>
				<Navigation session={session} />
				<main className={styles.content}>{children}</main>
				<Sidebar />
				<Toaster richColors position="top-right" className={styles.toast} />
			</SkeletonTheme>
		</div>
	)
}
