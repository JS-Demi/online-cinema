import { IMovie } from 'shared/api/movie'

export interface IUser {
	_id: string
	email: string
	isAdmin: boolean
}
export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAccountFields {
	email: string
	password: string
}
export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface IAuthResponse extends ITokens {
	user: IUser
}

export interface ISession {
	exp: number
	expires: string
	iat: number
	user: IUser
}

export interface IUserResponse extends IUser {
	favorites: IMovie[]
	createdAt: string
}
