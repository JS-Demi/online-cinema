import type { Metadata } from 'next'

import { Statistics } from 'widgets/admin'

import { Heading } from 'shared/ui/heading'

export const metadata: Metadata = {
	title: 'Manage for admins',
	description: '',
}

export default function AdminPage() {
	return (
		<article className="flex flex-col">
			<header>
				<Heading title="Some statistics" />
			</header>
			<Statistics />
		</article>
	)
}
