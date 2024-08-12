'use client'

import { ChangeEvent, FC } from 'react'

import { Button, SearchField } from 'shared/ui'

interface IAdminDataHeader {
	readonly searchTerm: string
	readonly handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
	readonly handleClick?: () => void
}

export const AdminDataHeader: FC<IAdminDataHeader> = ({
	searchTerm,
	handleSearch,
	handleClick,
}) => {
	return (
		<div className="flex items-center justify-between">
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{handleClick && (
				<Button onClick={handleClick} className="opacity-80">
					Create new
				</Button>
			)}
		</div>
	)
}
