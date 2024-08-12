import * as MaterialIcons from 'react-icons/md'

export type TMaterialIconName = keyof typeof MaterialIcons

export interface INavItem {
	readonly title: string
	readonly icon: TMaterialIconName
	readonly link: string
}

export interface IActionButton {
	readonly title: string
	readonly icon: TMaterialIconName
	readonly action: 'Logout'
}

export interface INavGroup {
	readonly title: string
	readonly items: INavItem[]
}
