'use server'

import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

import {
	STORE_ACCESS_TOKEN_NAME,
	STORE_REFRESH_TOKEN_NAME,
} from 'shared/constants'
import { IAuthResponse, ISession } from 'shared/types'

const key = new TextEncoder().encode(process.env.SECRET ?? 'secret')

const cookie = {
	name: 'session',
	options: { httpOnly: true, secure: true, path: '/' },
	duration: 2400 * 60 * 60 * 1000,
}

export async function encrypt(payload: any) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('100days')
		.sign(key)
}
export async function decrypt(session: string): Promise<any> {
	const { payload } = await jwtVerify(session, key, {
		algorithms: ['HS256'],
	})
	return payload
}

export async function createSession(data: IAuthResponse, redirectUrl?: string) {
	const expires = new Date(Date.now() + cookie.duration)
	const session = await encrypt({ user: data.user, expires })
	cookies().set(STORE_ACCESS_TOKEN_NAME, data.accessToken, {
		expires,
	})
	cookies().set(STORE_REFRESH_TOKEN_NAME, data.refreshToken, {
		...cookie.options,
		expires,
	})
	cookies().set(cookie.name, session, { ...cookie.options, expires })
	if (redirectUrl) redirect(redirectUrl)
}

export async function clearSession() {
	cookies().delete(cookie.name)
	cookies().delete(STORE_ACCESS_TOKEN_NAME)
	cookies().delete(STORE_REFRESH_TOKEN_NAME)
	redirect('/sign-in')
}

export async function getSession() {
	const session = cookies().get(cookie.name)?.value
	if (!session) return null
	return (await decrypt(session)) as ISession
}

export async function updateSession(req: NextRequest) {
	const session = req.cookies.get(cookie.name)?.value
	if (!session) return

	const parsed = await decrypt(session)
	parsed.expires = new Date(Date.now() + cookie.duration)
	const res = NextResponse.next()
	res.cookies.set({
		name: cookie.name,
		value: await decrypt(session),
		...cookie.options,
		expires: parsed.expires,
	})
	return res
}
