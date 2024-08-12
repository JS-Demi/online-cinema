import type { Metadata } from 'next'

import { SignIn } from 'pages/signIn'

export const metadata: Metadata = {
	title: 'Sign In',
	description: '',
}

export default function Page() {
	return <SignIn />
}
