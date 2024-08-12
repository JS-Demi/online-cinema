import type { Metadata } from 'next'

import { ManageMovies } from 'pages/admin/movies'

export const metadata: Metadata = {
	title: 'Manage | Movies',
}

export default function ManageMoviesPage() {
	return <ManageMovies />
}
