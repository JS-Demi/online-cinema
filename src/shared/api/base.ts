import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
} from 'axios'
import Cookie from 'js-cookie'
import { NextResponse } from 'next/server'

import { JSON_CONTENT_TYPE, STORE_ACCESS_TOKEN_NAME } from 'shared/constants'
import { clearSession, createSession } from 'shared/lib/auth'
import { handleErrorMessage } from 'shared/lib/handleError'

import { updateTokens } from './account'

export const API_URL = `${process.env.APP_URL}/api/`

class ApiInstance {
	private axios: AxiosInstance

	constructor() {
		this.axios = axios.create({
			baseURL: API_URL,
			timeout: 120000,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}
	async get<T = any, R = AxiosResponse<T>, D = any>(
		endpoint: string,
		config?: AxiosRequestConfig<D>
	): Promise<R> {
		const response = await this.axios.get(endpoint, config)
		return response.data
	}

	async post<T = any, R = AxiosResponse<T>, D = any>(
		endpoint: string,
		data: D,
		config?: AxiosRequestConfig<D>
	): Promise<R> {
		const response = await this.axios.post(endpoint, data, config)
		return response.data
	}
}

class TokenApiInstance {
	private axios: AxiosInstance

	constructor() {
		this.axios = axios.create({
			baseURL: API_URL,
			timeout: 120000,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		this.axios.interceptors.request.use((config) => {
			const accessToken = Cookie.get(STORE_ACCESS_TOKEN_NAME)

			if (config.headers && accessToken) {
				config.headers.Authorization = `Bearer ${accessToken}`
			}
			return config
		})

		this.axios.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config
				const message = handleErrorMessage(error)
				if (
					(error.response.status === 401 ||
						message === 'jwt expired' ||
						message === 'jwt must be provided') &&
					error.config &&
					!error.config._isRetry
				) {
					originalRequest._isRetry = true
					try {
						const response = await updateTokens()
						clearSession()
						createSession(response)
						return this.axios.request(originalRequest)
					} catch (error) {
						const msg = handleErrorMessage(error)
						if (msg === 'jwt expired') clearSession()
					}
				}
				throw error
			}
		)
	}

	async get<T = any, R = AxiosResponse<T>, D = any>(
		endpoint: string,
		config?: AxiosRequestConfig<D>
	): Promise<R> {
		const response = await this.axios.get(endpoint, config)
		return response.data
	}
	async post<T = any, R = AxiosResponse<T>, D = any>(
		endpoint: string,
		data: D,
		config?: AxiosRequestConfig<D>
	): Promise<R> {
		const response = await this.axios.post(endpoint, data, config)
		return response.data
	}
	async put<T = any, R = AxiosResponse<T>, D = any>(
		endpoint: string,
		data: D,
		config?: AxiosRequestConfig<D>
	): Promise<R> {
		const response = await this.axios.put(endpoint, data, config)
		return response.data
	}
	async delete<T = any, R = AxiosResponse<T>, D = any>(
		endpoint: string,
		config?: AxiosRequestConfig<D>
	): Promise<R> {
		const response = await this.axios.delete(endpoint, config)
		return response.data
	}
}

export const tokenApi = new TokenApiInstance()
export const api = new ApiInstance()
export const apiTest = axios.create({
	baseURL: API_URL,
	timeout: 120000,
	headers: JSON_CONTENT_TYPE,
})
