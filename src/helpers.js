import axios from 'axios'

export const getUnsplashImageById = async (unsplashImageId) => {
    try {
        let resp = await axios.get(`https://api.unsplash.com/photos/${unsplashImageId}?client_id=lFf5ncgm_N1TG8qqyRbdalnq33ANd-0ZEkRFNfgXQ7I`);
        return resp.data;
    } catch (e) {
        return null;
    }
}

export const fetchRandomUnsplashImage = async () => {
    try {
        let url = "https://api.unsplash.com/photos/random";
        let params = {
            client_id: "lFf5ncgm_N1TG8qqyRbdalnq33ANd-0ZEkRFNfgXQ7I",
            orientation: "landscape",
            featured: true,
            content_filter: "high",
            collections: "64456374",
            topics: "Nepal, Outdoor, Peak, Kathmandu, Building, Himalaya, Mountain",
        };
        url = url + "?" + Object.keys(params).map((p) => p + "=" + params[p]).join("&");
        let resp = await axios.get(url);
        return resp.data;
    } catch (e) {
        return null;
    }
}

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}