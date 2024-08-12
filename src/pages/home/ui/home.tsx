'use client'

import { FC } from 'react'

import { Heading } from 'shared/ui/heading'

interface IHome {}

export const Home: FC<IHome> = () => {
	return (
		<Heading
			title="Watch movies online"
			className="text-gray-300 mb-8 text-xl"
		/>
	)
}
