import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: '404: This page could not be Found',
}

export default function Page() {
	return (
		<div className="h-screen flex flex-col gap-5 items-center justify-center animate-fade">
			<div className="flex items-center gap-4">
				<h1 className="border-r border-r-white p-3 text-3xl">404</h1>
				<span>This page could not be found</span>
			</div>
			<button className="btn-primary p-2.5 block text-center">
				<Link href="/">Return to home</Link>
			</button>
		</div>
	)
}
