export const debounce = (callBack, timeout = 400) => {
	let debounceTimer
	return (...args) => {
		clearTimeout(debounceTimer)
		debounceTimer = setTimeout(() => callBack.apply(this, args), timeout)
	}
}
