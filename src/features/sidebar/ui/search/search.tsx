'use client'

import { ChangeEvent, FC, useState } from 'react'

import { useSearchMovieQuery } from 'features/sidebar/api/useSearchMovieQuery'

import { DropDownSearchItem } from 'entities/sidebar'

import { useDebounce } from 'shared/lib/debounce'
import { SearchField } from 'shared/ui'

import styles from './search.module.scss'

interface ISearch {}

export const Search: FC<ISearch> = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { data: movies, isSuccess } = useSearchMovieQuery(debouncedSearch)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && (
				<div className={styles.list}>
					{movies.length ? (
						movies.map((movie) => (
							<DropDownSearchItem movie={movie} key={movie._id} />
						))
					) : (
						<div className="text-white text-center my-4">Movies not found!</div>
					)}
				</div>
			)}
		</div>
	)
}
