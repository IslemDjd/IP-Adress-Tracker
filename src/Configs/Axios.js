import axios from "axios";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_BASED_URL,
    params: {
        apiKey: import.meta.env.VITE_API_KEY
    }
});
