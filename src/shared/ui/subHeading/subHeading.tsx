'use client'

import { FC } from 'react'

interface ISubHeading {
	title: string
}

export const SubHeading: FC<ISubHeading> = ({ title }) => {
	return <h2 className="text-white text-xl mb-1 font-semibold">{title}</h2>
}
