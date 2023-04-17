export const modifyRouteAttribute = (routes, id, attribute, data) => {
	const modify = route => {
		const newRoute = { ...route }
		if (newRoute.id === id) {
			newRoute[attribute] = data
		}
		if (newRoute.children) {
			newRoute.children.forEach(modify)
		}
	}

	const newRoutes = [...routes]
	newRoutes.forEach(modify)
	return newRoutes
}
