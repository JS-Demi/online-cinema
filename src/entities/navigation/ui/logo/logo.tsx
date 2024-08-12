'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import logo from 'shared/assets/logo.svg'

interface ILogo {}

export const Logo: FC<ILogo> = () => {
	return (
		<Link href="/" className="py-layout flex items-center gap-2">
			<Image
				width={40}
				height={40}
				src={logo}
				alt="online-cinema"
				draggable={false}
			/>
			<h1>D-Movie</h1>
		</Link>
	)
}
