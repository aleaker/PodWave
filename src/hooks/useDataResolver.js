import { useState, useEffect, useRef } from "react"

import axios from "axios"

import PRESETS from "constants/presets"

import { isValidTimestamp } from "util/helpers"

const { CancelToken } = axios

/*
This hook resolves the requested data. It is initialized with a presetId, wich is used to 
resolve different flags and configurations especific to each view.
 */

const useDataResolver = id => {
	const sourceRef = useRef(null)

	const [status, setStatus] = useState({
		fetching: false,
		error: null,
		data: null,
	})

	// Callback to cancel fetch requests if the component is unmounted
	const cancelCb = msg => {
		if (sourceRef) {
			sourceRef.current.cancel(msg)
			sourceRef.current = CancelToken.source()
		}
	}

	const { endpoint, parser } = PRESETS[id]

	// Will fetch and parse the requested data according to the preset endpoint and parser function
	// then it will store the parsed data in local storage and update the local state
	const fetchAndStoreData = async storageKey => {
		try {
			const rawResponse = await axios({
				url: endpoint,
				method: "POST",
				data: null,
				params: null,
				cancelToken: sourceRef.current.token,
			})

			const parsedResponse = parser(rawResponse.data)
			window.localStorage.setItem(storageKey, JSON.stringify(parsedResponse))

			setStatus({
				fetching: false,
				error: null,
				data: parsedResponse,
			})
		} catch (err) {
			console.log(err)
			setStatus({
				fetching: false,
				error: err,
				data: null,
			})
		}
	}

	// Will search for valid data in the local storage. If there is no data or if it is stale
	// it will call fetchAndStoreData
	const getData = storageKey => {
		const storedData = JSON.parse(window.localStorage.getItem(storageKey))

		if (storedData && isValidTimestamp(storedData.timestamp)) {
			setStatus({
				fetching: false,
				error: null,
				data: storedData,
			})
		} else {
			fetchAndStoreData(storageKey)
		}
	}

	useEffect(() => {
		sourceRef.current = CancelToken.source()

		return () => {
			cancelCb("unmounted")
		}
	}, [])

	return { ...status, cancelCb, getData }
}

export default useDataResolver
