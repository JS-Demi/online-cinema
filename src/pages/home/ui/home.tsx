'use client'

import { FC } from 'react'
import { Layout } from 'widgets/layout'

interface IHome {}

export const Home: FC<IHome> = () => {
	return (
		<Layout>
			<div>Home</div>
		</Layout>
	)
}
