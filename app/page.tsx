import type { Metadata } from 'next'

import { Home } from 'pages/home'

import { titleMerge } from 'shared/config'

export const metadata: Metadata = {
	title: titleMerge('Home'),
}

export default function Page() {
	return (
		<div>
			<Home />
		</div>
	)
}
