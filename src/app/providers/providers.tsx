'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FC } from 'react'

import { getQueryClient } from './react-query'

interface IProviders {
	readonly children: React.ReactNode
}

export const Providers: FC<IProviders> = ({ children }) => {
	const queryClient = getQueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			{children}
		</QueryClientProvider>
	)
}
