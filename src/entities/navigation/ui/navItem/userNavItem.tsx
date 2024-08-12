'use client'

import { FC } from 'react'

import { ISession } from 'shared/types'

import { LogoutButton } from '../logoutButton/logoutButton'
import { NavItem } from './navItem'
import styles from './navItem.module.scss'

interface IUserNavItem {
	session: ISession | null
}
export const UserNavItem: FC<IUserNavItem> = ({ session }) => {
	return session ? (
		<>
			<NavItem
				item={{ title: 'Profile', icon: 'MdSettings', link: '/profile' }}
			/>
			<li className={styles.li}>
				<LogoutButton />
			</li>
			{session.user.isAdmin && (
				<NavItem
					item={{
						icon: 'MdOutlineLock',
						title: 'Admin panel',
						link: '/manage',
					}}
				/>
			)}
		</>
	) : (
		<NavItem
			item={{
				title: 'Login',
				icon: 'MdLogin',
				link: '/sign-in',
			}}
		/>
	)
}
