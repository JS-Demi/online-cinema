import { IAdminNavItem } from 'shared/types'

const ADMIN_URL = '/manage'

export const ADMIN_NAV_ITEMS: IAdminNavItem[] = [
	{
		title: 'Statistics',
		link: `${ADMIN_URL}`,
	},
	{
		title: 'Users',
		link: `${ADMIN_URL}/users`,
	},
	{
		title: 'Movies',
		link: `${ADMIN_URL}/movies`,
	},
	{
		title: 'Genres',
		link: `${ADMIN_URL}/genres`,
	},
	{
		title: 'Actors',
		link: `${ADMIN_URL}/actors`,
	},
]
