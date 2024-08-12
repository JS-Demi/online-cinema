'use client'

import { FC } from 'react'

interface IHeading {
	readonly title: string
	readonly className?: string
}

export const Heading: FC<IHeading> = ({ className, title }) => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semibold ${className?.includes('xl') ? '' : 'text-3xl'} ${className}`}
		>
			{title}
		</h1>
	)
}
