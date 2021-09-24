import axios from 'axios'
import * as localForage from "localforage";

export const getUnsplashImageById = async (unsplashImageId) => {
    try {
        let resp = await axios.get(`https://api.unsplash.com/photos/${unsplashImageId}?client_id=lFf5ncgm_N1TG8qqyRbdalnq33ANd-0ZEkRFNfgXQ7I`);
        return resp.data;
    } catch (e) {
        return null;
    }
}

export const fetchRandomUnsplashImage = async (collections = "") => {
    try {
        let url = "https://api.unsplash.com/photos/random";
        let params = {
            client_id: "lFf5ncgm_N1TG8qqyRbdalnq33ANd-0ZEkRFNfgXQ7I",
            orientation: "landscape",
            featured: true,
            content_filter: "high",
            collections: "64456374," + collections,
            topics: "Nepal, Outdoor, Peak, Kathmandu, Building, Himalaya, Mountain",
        };
        url = url + "?" + Object.keys(params).map((p) => p + "=" + params[p]).join("&");
        let resp = await axios.get(url);
        return resp.data;
    } catch (e) {
        return null;
    }
}

export const cacheImage = (imageUrls, lsKey) => {
    let imageUrl = imageUrls.raw + `&w=${window.innerWidth}&h=${window.innerHeight}&dpr=2`;
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = async function () {
            let canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
            let imageData = canvas.toDataURL();
            try {
                await localForage.setItem(lsKey, imageData);
            } catch (err) {
                console.log(err);
                reject("Error getting data from IndexedDB");
            }
            resolve(imageData);
        }
        image.crossOrigin = "anonymous";
        image.src = imageUrl;
    });
}

export const getCachedImage = async (lsKey) => {
    try {
        return await localForage.getItem(lsKey);
    } catch (err) {
        console.log(err);
        return null;
    }
}



export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}