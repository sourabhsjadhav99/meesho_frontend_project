import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            params
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}