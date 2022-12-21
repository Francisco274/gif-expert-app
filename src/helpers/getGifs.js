export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=F9DDZgS9z5fcmr30KaYkDMTx56fn8LhF&q= ${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}
