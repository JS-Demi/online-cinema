// 'use server'
// import { cookies } from 'next/headers'
import cookies from 'js-cookie'

import { JSON_CONTENT_TYPE, STORE_REFRESH_TOKEN_NAME } from 'shared/constants'
import { IAccountFields, IAuthResponse } from 'shared/types'

import { api, apiTest } from '../base'

const BASE_URL = 'auth'
const LOGIN_ENDPOINT = `${BASE_URL}/login`
const REGISTER_ENDPOINT = `${BASE_URL}/register`

export const login = (data: IAccountFields): Promise<IAuthResponse> => {
	return api.post(LOGIN_ENDPOINT, data)
}

export const register = (data: IAccountFields): Promise<IAuthResponse> => {
	return api.post(REGISTER_ENDPOINT, data)
}
export const updateTokens = async (): Promise<IAuthResponse> => {
	const refreshToken = cookies.get(STORE_REFRESH_TOKEN_NAME)

	return api.post(
		`${LOGIN_ENDPOINT}/access-token`,
		{ refreshToken },
		{
			headers: JSON_CONTENT_TYPE,
		}
	)
}
