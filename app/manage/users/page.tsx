import type { Metadata } from 'next'

import { ManageUsers } from 'pages/admin/users'

export const metadata: Metadata = {
	title: 'Manage | Users',
}

export default function AdminUsersPage() {
	return <ManageUsers />
}
