import axios from "axios";
console.log(process.env.YT_API_KEY);
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key:'AIzaSyAuiwk5_nGs5JucitLuf8wi96g0By1qQ7k'
    },
    // withCredentials: true,
})

export default request