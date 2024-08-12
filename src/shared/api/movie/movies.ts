import { api, tokenApi } from '../base'
import { IMovie } from './types'

const BASE_URL = 'movies'
const MOST_POPULAR_ENDPOINT = `${BASE_URL}/most-popular`

export const getMovies = (searchTerm?: string): Promise<IMovie[]> => {
	return api.get(BASE_URL, { params: searchTerm ? { searchTerm } : {} })
}

export const getMostPopularMovies = (): Promise<IMovie[]> => {
	return api.get(MOST_POPULAR_ENDPOINT)
}

export const removeMovie = (id: string): Promise<string> => {
	return tokenApi.delete(`${BASE_URL}/${id}`)
}
