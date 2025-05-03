import axios from "axios";

const api = axios.create({
    baseURL:"https://api.coingecko.com/api/v3",
    headers: {
        accept: "application/json",
        "x_cg_demo_api_key":
        "CG-KCWiLWPXuJWojRgFtJG3uDoC",
    },
});

export default api;