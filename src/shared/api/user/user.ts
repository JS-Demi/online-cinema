import exp from 'constants'

import { tokenApi } from 'shared/api/base'
import { IUser, IUserResponse } from 'shared/types'

const BASE_URL = 'users'

export const getCountUsers = (): Promise<number> => {
	return tokenApi.get(`${BASE_URL}/count`)
}

export const getUsers = (searchTerm?: string): Promise<IUserResponse[]> => {
	return tokenApi.get(BASE_URL, { params: searchTerm ? { searchTerm } : {} })
}

export const removeUser = (id: string): Promise<string> => {
	return tokenApi.delete(`${BASE_URL}/${id}`)
}
