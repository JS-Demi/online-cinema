'use client'

import { FC } from 'react'

import { NavItem, UserNavItem } from 'entities/navigation'

import { INavGroup, ISession, IUser } from 'shared/types'

interface INavigationGroup {
	readonly data: INavGroup
	readonly session?: ISession | null
}

export const NavigationGroup: FC<INavigationGroup> = ({
	data,
	session = null,
}) => {
	const { items, title } = data
	return (
		<div className="mb-14 animate-fade">
			<h2 className="text-gray-500 uppercase text-sm font-semibold">{title}</h2>
			<ul>
				{items.map((item) => (
					<NavItem key={item.link} item={item} />
				))}
				{title === 'General' && <UserNavItem session={session} />}
			</ul>
		</div>
	)
}
