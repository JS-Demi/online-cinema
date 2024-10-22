import { api, tokenApi } from 'shared/api/base'

import { IGenre, IGenreEdit } from './types'

const BASE_URL = 'genres'

export const getGenres = (searchTerm?: string): Promise<IGenre[]> => {
	return api.get(BASE_URL, { params: searchTerm ? { searchTerm } : {} })
}
export const getGenreById = (id: string): Promise<IGenre> => {
	return tokenApi.get(`${BASE_URL}/${id}`)
}

export const updateGenre = (id: string, data: IGenreEdit): Promise<IGenre> => {
	return tokenApi.put(`${BASE_URL}/${id}`, data)
}
export const removeGenre = (id: string): Promise<string> => {
	return tokenApi.delete(`${BASE_URL}/${id}`)
}

export const createGenre = (): Promise<string> => {
	return tokenApi.post(BASE_URL, {})
}
