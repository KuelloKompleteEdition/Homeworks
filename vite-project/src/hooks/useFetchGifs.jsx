import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGif";

export const useFetchGifs = (category) => {
    const [images,steImages] = useState([]);

    const getImages = async() => {
        const images = await getGifs(category)
        steImages(images)
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        images: images,
        isloading: false
    }
}