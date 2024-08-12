import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { IAuthResponse, IUser } from 'shared/types'

interface IAccountStore {
	user: IUser | null
	setUser: (user: IUser | null) => void
}

export const useAccountStore = create<IAccountStore>()(
	persist(
		(set) => ({
			user: null,
			setUser: (user) => set({ user }),
		}),
		{ name: 'user' }
	)
)
