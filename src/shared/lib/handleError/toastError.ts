import { toast } from 'sonner'

import { handleErrorMessage } from './handleErrorMessage'

export const toastError = (err: any, title?: string) => {
	const message = handleErrorMessage(err)

	toast.error(title || 'Error request', { description: message })
}
