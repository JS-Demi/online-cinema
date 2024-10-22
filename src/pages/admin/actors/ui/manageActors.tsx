'use client'

import { ChangeEvent, FC, useState } from 'react'

import { AdminDataHeader, AdminDataList } from 'widgets/admin'

import { useDebounce } from 'shared/lib/debounce'
import { Heading } from 'shared/ui/heading'

import { useActorsQuery } from '../api/useActorsQuery'
import { useCreateActor } from '../api/useCreateActor'
import { useRemoveActorMutation } from '../api/useRemoveActorMutation'

interface IManageActors {}

export const ManageActors: FC<IManageActors> = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { isLoading, data: actors, isSuccess } = useActorsQuery(debouncedSearch)
	const { mutate: removeUser } = useRemoveActorMutation()
	const { mutate: createUser } = useCreateActor()

	const removeHandler = (id: string) => {
		removeUser(id)
	}
	return (
		<div className="flex flex-col gap-10">
			<Heading title="Actors" />
			<AdminDataHeader
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				handleClick={createUser}
			/>
			<AdminDataList
				titles={['Name', 'Count movies']}
				itemName="Actors"
				data={actors || []}
				isLoading={isLoading}
				removeHandler={removeHandler}
			/>
		</div>
	)
}
