'use client'

import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { siteName, titleMerge } from 'shared/config'
import { cleanText } from 'shared/lib/cleanText'
import { ISeo } from 'shared/types/meta'

import logoImage from 'shared/assets/logo.svg'

interface IMeta extends ISeo {
	readonly children: React.ReactNode
}

export const Meta: FC<IMeta> = ({ title, description, image, children }) => {
	const pathname = usePathname()
	const currentUrl = `${process.env.APP_URL}/${pathname}`
	return (
		<>
			{description ? (
				<Head>
					<title itemProp="headline">{titleMerge(title)}</title>
					<meta
						itemProp="description"
						name="description"
						content={cleanText(description, 152)}
					/>
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || logoImage} />
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={cleanText(description, 197)}
					/>
				</Head>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
			{children}
		</>
	)
}
