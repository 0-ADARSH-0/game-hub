import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6c6f0d03fcf6457987d9f21d962f304e"
    }
})