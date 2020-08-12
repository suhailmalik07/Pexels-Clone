import Axios from "axios";


console.log(process.env.NODE_ENV)

export default Axios.create({
    baseURL: "https://api.pexels.com/v1/",
    headers: {
        Authorization: "563492ad6f917000010000014107a189a4414daab1f39ceefe900972",
    }

})