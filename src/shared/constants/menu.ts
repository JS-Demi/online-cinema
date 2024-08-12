import { INavGroup } from 'shared/types'

export const MENU: INavGroup = {
	title: 'Menu',
	items: [
		{
			link: '/',
			title: 'Home',
			icon: 'MdHome',
		},
		{
			link: '/genres',
			title: 'Discovery',
			icon: 'MdExplore',
		},
		{
			link: '/fresh',
			title: 'Fresh movies',
			icon: 'MdRefresh',
		},
		{
			link: '/trending',
			title: 'Trending now',
			icon: 'MdLocalFireDepartment',
		},
	],
}
