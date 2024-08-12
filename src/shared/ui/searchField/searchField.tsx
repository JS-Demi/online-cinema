'use client'

import { ChangeEvent, FC } from 'react'
import styles from './searchField.module.scss'
import { MdMaterialIcon } from '../MaterialIcon/MdMaterialIcon'
import { Input } from '../input/input'

interface ISearchField {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<MdMaterialIcon icon="MdSearch" />
			<Input placeholder="Search" value={searchTerm} onChange={handleSearch} />
		</div>
	)
}
