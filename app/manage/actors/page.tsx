import type { Metadata } from 'next'

import { ManageActors } from 'pages/admin/actors'

export const metadata: Metadata = {
	title: 'Manage | Actors',
}

export default function ManageActorsPage() {
	return <ManageActors />
}
