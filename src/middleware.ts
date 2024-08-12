import { NextRequest, NextResponse } from 'next/server'

import { STORE_REFRESH_TOKEN_NAME } from 'shared/constants'
import { getSession } from 'shared/lib/auth'

export async function middleware(request: NextRequest) {
	const session = await getSession()
	const refreshToken = request.cookies.get(STORE_REFRESH_TOKEN_NAME)
	const routesForAdmin = ['/manage']
	const routesForUsers = ['/profile']
	const nextUrl = request.nextUrl
	const currentPath = nextUrl.pathname

	const isAdminRoute = routesForAdmin.includes(currentPath)
	const isUserRoute = routesForUsers.includes(currentPath)
	const loginUrl = new URL('/sign-in', nextUrl)
	if (isUserRoute) {
		if (!session || !refreshToken) {
			if (!currentPath.startsWith('/sign-in' || '/account')) {
				loginUrl.searchParams.set('redirect', currentPath)
			}
			return NextResponse.redirect(new URL('/sign-in', nextUrl))
		}
	}
	if (isAdminRoute) {
		if (!session?.user.isAdmin) {
			return NextResponse.redirect(new URL('/not-found', nextUrl))
		}
	}
	return NextResponse.next()
}
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
