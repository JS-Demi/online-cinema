import type { Metadata } from 'next'

import { ManageGenres } from 'pages/admin/genres'

export const metadata: Metadata = {
	title: 'Manage | Genres',
}

export default function ManageGenresPage() {
	return <ManageGenres />
}
