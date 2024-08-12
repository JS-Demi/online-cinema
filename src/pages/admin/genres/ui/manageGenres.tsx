'use client'

import { ChangeEvent, FC, useState } from 'react'

import { AdminDataHeader, AdminDataList } from 'widgets/admin'

import { useDebounce } from 'shared/lib/debounce'
import { Heading } from 'shared/ui/heading'

import { useGenresQuery } from '../api/useGenresQuery'
import { useRemoveGenreMutation } from '../api/useRemoveGenreMutation'

interface IManageGenres {}

export const ManageGenres: FC<IManageGenres> = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { isLoading, data: genres, isSuccess } = useGenresQuery(debouncedSearch)
	const { mutate: removeUser } = useRemoveGenreMutation()

	const removeHandler = (id: string) => {
		removeUser(id)
	}
	return (
		<div className="flex flex-col gap-10">
			<Heading title="Genres" />
			<AdminDataHeader searchTerm={searchTerm} handleSearch={handleSearch} />
			<AdminDataList
				titles={['Name', 'Slug']}
				itemName="Genres"
				data={genres || []}
				isLoading={isLoading}
				removeHandler={removeHandler}
			/>
		</div>
	)
}
