import { api, tokenApi } from '../base'
import { IActor } from './types'

const BASE_URL = 'actors'

export const getActors = (searchTerm?: string): Promise<IActor[]> => {
	return api.get(BASE_URL, { params: searchTerm ? { searchTerm } : {} })
}

export const removeActor = (id: string): Promise<string> => {
	return tokenApi.delete(`${BASE_URL}/${id}`)
}
