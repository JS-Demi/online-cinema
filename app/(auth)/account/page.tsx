import type { Metadata } from 'next'

import { SignUp } from 'pages/sign-up'

export const metadata: Metadata = {
	title: 'Create Your Account',
}

export default function Page() {
	return <SignUp />
}
