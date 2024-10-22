import { api, tokenApi } from '../base'
import { IActor, IActorById } from './types'

const BASE_URL = 'actors'

export const getActors = (searchTerm?: string): Promise<IActor[]> => {
	return api.get(BASE_URL, { params: searchTerm ? { searchTerm } : {} })
}
export const getActorById = (id: string): Promise<IActorById> => {
	return tokenApi.get(`${BASE_URL}/${id}`)
}
export const removeActor = (id: string): Promise<string> => {
	return tokenApi.delete(`${BASE_URL}/${id}`)
}
export const createActor = (): Promise<string> => {
	return tokenApi.post(BASE_URL, {})
}
