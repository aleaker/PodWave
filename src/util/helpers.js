import axios from "axios"

export const isValidTimestamp = timestamp => {
	const currentTimestamp = new Date().getTime()
	const twentyFourHoursAgo = currentTimestamp - 24 * 60 * 60 * 1000

	return timestamp > twentyFourHoursAgo
}

export const getData = async (storageKey, preset) => {
	const { endpoint, paramsToReplace, parser } = preset

	const storedData = JSON.parse(window.localStorage.getItem(storageKey))

	if (storedData && isValidTimestamp(storedData.timestamp)) {
		return storedData
	}
	try {
		const resolvedEnpoint = paramsToReplace ? endpoint.replace(paramsToReplace, storageKey) : endpoint

		const rawResponse = await axios({
			url: resolvedEnpoint,
			method: "POST",
			// cancelToken: sourceRef.current.token,
		})

		const parsedResponse = parser(rawResponse.data)
		window.localStorage.setItem(storageKey, JSON.stringify(parsedResponse))

		return parsedResponse
	} catch (err) {
		console.log(err)
		return err
	}
}
