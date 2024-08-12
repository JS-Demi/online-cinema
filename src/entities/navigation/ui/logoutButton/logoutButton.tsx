'use client'

import { FC, MouseEvent } from 'react'

import { clearSession } from 'shared/lib/auth'
import { MdMaterialIcon } from 'shared/ui'

export const LogoutButton: FC = () => {
	const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		clearSession()
	}
	return (
		<button onClick={handleLogout}>
			<MdMaterialIcon icon={'MdLogout'} />
			<span>{'Logout'}</span>
		</button>
	)
}
