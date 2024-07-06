import type { Metadata } from 'next'
import { Home } from 'pages/home'

export const metadata: Metadata = {
	title: 'home',
	description: 'home page',
}

export default function Page() {
	return (
		<div>
			<Home />
		</div>
	)
}
