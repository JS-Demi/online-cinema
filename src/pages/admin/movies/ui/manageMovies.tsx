'use client'

import { ChangeEvent, FC, useState } from 'react'

import { AdminDataHeader, AdminDataList } from 'widgets/admin'

import { useDebounce } from 'shared/lib/debounce'
import { Heading } from 'shared/ui/heading'

import { useMoviesQuery } from '../api/useMoviesQuery'
import { useRemoveMovieMutation } from '../api/useRemoveMovieMutation'

interface IManageMovies {}

export const ManageMovies: FC<IManageMovies> = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { isLoading, data: movies } = useMoviesQuery(debouncedSearch)
	const { mutate: removeUser } = useRemoveMovieMutation()

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	const removeHandler = (id: string) => {
		removeUser(id)
	}
	return (
		<div className="flex flex-col gap-10">
			<Heading title="Movies" />
			<AdminDataHeader searchTerm={searchTerm} handleSearch={handleSearch} />
			<AdminDataList
				titles={['Title', 'Genre', 'Rating']}
				itemName="Movies"
				data={movies || []}
				isLoading={isLoading}
				removeHandler={removeHandler}
			/>
		</div>
	)
}
