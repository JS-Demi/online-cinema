import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import { Layout } from 'app/layout/layout'
import { Providers } from 'app/providers'
import { getQueryClient } from 'app/providers/react-query'

import { mostPopularMoviesQueryOptions } from 'features/sidebar'

import { popularGenresQueryOptions } from 'entities/navigation'

import logo from 'shared/assets/logo.svg'
import { APP_URL, SITE_NAME, bgColor } from 'shared/constants'
import { getSession } from 'shared/lib/auth'
import { cleanText } from 'shared/lib/cleanText'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1.0,
	themeColor: bgColor,
}
export const metadata: Metadata = {
	title: 'Watch movies online',
	description: cleanText(
		'Watch MovieApp movies and TV shows online or stream right to your browser',
		152
	),
	alternates: {
		canonical: APP_URL,
	},
	openGraph: {
		locale: 'en',
		title: 'Watch movies online',
		url: APP_URL,
		images: logo,
		siteName: SITE_NAME,
		description: cleanText(
			'Watch MovieApp movies and TV shows online or stream right to your browser',
			197
		),
	},
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const queryClient = getQueryClient()
	void queryClient.prefetchQuery(popularGenresQueryOptions)
	void queryClient.prefetchQuery(mostPopularMoviesQueryOptions)
	const session = await getSession()
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<HydrationBoundary state={dehydrate(queryClient)}>
						<Layout session={session}>{children}</Layout>
					</HydrationBoundary>
				</Providers>
			</body>
		</html>
	)
}
