
export const getGifs = async(category) => {
		
	const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=5&api_key=CrH89OdbSLcYJ94QLDcXuFcgH3XrXz6R`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(({ id, title, images }) => {
		return {
			id,
			title,
			url: images?.downsized_medium.url
		}
	})

	return gifs;
}