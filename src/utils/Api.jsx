import Axios from "axios";
// require('dotenv').config()


export default Axios.create({
    baseURL: "https://api.pexels.com/v1/",
    headers: {
        Authorization: process.env.REACT_APP_API_KEY,
    }

})