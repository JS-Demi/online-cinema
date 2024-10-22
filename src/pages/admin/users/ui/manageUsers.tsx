'use client'

import { ChangeEvent, FC, useState } from 'react'

import { useCreateActor } from 'pages/admin/actors/api/useCreateActor'

import { AdminDataHeader, AdminDataList } from 'widgets/admin'

import { useDebounce } from 'shared/lib/debounce'
import { Heading } from 'shared/ui/heading'

import { useCreateUser } from '../api/useCreateUser'
import { useRemoveUserMutation } from '../api/useRemoveUserMutation'
import { useUsersQuery } from '../api/useUsersQuery'

interface IManageUsers {}

export const ManageUsers: FC<IManageUsers> = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { isLoading, data: users, isSuccess } = useUsersQuery(debouncedSearch)
	const { mutate: removeUser } = useRemoveUserMutation()
	const { mutate: createUser } = useCreateUser()

	const removeHandler = (id: string) => {
		removeUser(id)
	}
	return (
		<article className="flex flex-col gap-10">
			<Heading title="Users" />
			<AdminDataHeader
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				handleClick={createUser}
			/>
			<AdminDataList
				titles={['Email', 'Register date']}
				data={users || []}
				isLoading={isLoading}
				removeHandler={removeHandler}
				itemName="Users"
			/>
		</article>
	)
}
