

export const getGifs =  async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=mGC3XaSdgNk2tAHEah3MDrQml8zngElY`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id:img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    })


    //la info del gifs se envia a setimages
    return gifs;
}