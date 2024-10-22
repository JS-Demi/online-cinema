import { IActor } from '../actor'
import { IGenre } from '../genres'

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	createdAt: string
	parameters: IParameters
	genres: IGenre[]
	actors: IActor[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
	isSendTelegram: boolean
}

export interface IMovieById extends Omit<IMovie, 'actors' | 'genres'> {
	actors: string[]
	genres: string[]
	updatedAt: string
	__v: number
}
