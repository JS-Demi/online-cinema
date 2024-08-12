import { create } from 'zustand'

import { IAuthResponse } from 'shared/types'

interface IAccountStore {
	settings: null
	setSettings: () => void
}

export const useAccountStore = create<IAccountStore>()((set) => ({
	settings: null,
	setSettings: () => set({ settings: null }),
}))
