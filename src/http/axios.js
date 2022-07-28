/* 导入官方的axios */
import axios from "axios";
import config from "@/http/config";

const instance = axios.create({
    baseURL: config.baseUrl,
    timeout: config.timeOut,
    headers: config.headers
})

instance.interceptors.request.use(
    config => {
        let token  = sessionStorage.getItem("token")
        if(token){
            config.headers.token = token;
        }
        return config;
    },
    err => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    response => {
        return response.data.data
    },
    err => {
        console.log(err)
    }
)

export function get(url, params) {
    return instance.get(url, {params});
}

export function post(url, params) {
    return instance.post(url, params);
}
