import { TMaterialIconName } from 'shared/types'

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: TMaterialIconName
}

export type IGenreEdit = Omit<IGenre, '_id'>
