export const handleErrorMessage = (err: any) =>
	err.response && err.response.data
		? typeof err.response.data.message === 'object'
			? err.response.data.message[0]
			: err.response.data.message
		: err.message
