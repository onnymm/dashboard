export const appLoader = async ({ request }) => {
	const url = new URL(request.url)
	const query = url.searchParams.get('query')
	return { query }
}
