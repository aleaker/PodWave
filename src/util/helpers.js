export const debounce = (callBack, timeout = 400) => {
	let debounceTimer
	return (...args) => {
		clearTimeout(debounceTimer)
		debounceTimer = setTimeout(() => callBack.apply(this, args), timeout)
	}
}

export const isValidTimestamp = (timestamp)=>{
	const currentTimestamp = new Date().getTime();
	const twentyFourHoursAgo = currentTimestamp - (24 * 60 * 60 * 1000);

	return timestamp < twentyFourHoursAgo
}