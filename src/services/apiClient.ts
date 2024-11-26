import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? "https://api-v1.ljconstrutic.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
