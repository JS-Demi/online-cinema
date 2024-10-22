export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IActorById extends Omit<IActor, 'countMovies'> {
	__v: number
}
