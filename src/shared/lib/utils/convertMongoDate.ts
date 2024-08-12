export const convertMongoDate = (date: string): string =>
	new Date(date).toLocaleDateString('ru')
