import type { Metadata } from 'next'

import { AdminNavigation } from 'widgets/admin'

export const metadata: Metadata = {
	title: 'Manage panel',
}

export default function ManagePageLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section>
			<AdminNavigation />
			{children}
		</section>
	)
}
