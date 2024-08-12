'use client'

import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { INavItem } from 'shared/types'
import { MdMaterialIcon } from 'shared/ui'

import styles from './navItem.module.scss'

interface INavItemProps {
	readonly item: INavItem
}

export const NavItem: FC<INavItemProps> = ({ item }) => {
	const { icon, link, title } = item
	const pathname = usePathname()
	return (
		<li
			className={cn({ [styles.li]: true, [styles.active]: pathname === link })}
		>
			<Link href={link}>
				<MdMaterialIcon icon={icon} />
				<span>{title}</span>
			</Link>
		</li>
	)
}
