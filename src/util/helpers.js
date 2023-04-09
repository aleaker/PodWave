export const isValidTimestamp = timestamp => {
	const currentTimestamp = new Date().getTime()
	const twentyFourHoursAgo = currentTimestamp - 24 * 60 * 60 * 1000

	return timestamp > twentyFourHoursAgo
}
