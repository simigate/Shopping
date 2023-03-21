import axios from "axios"
export const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
});

const baseURL = 'http://localhost:8080/api/v1/'
export const getData = (path) => {
    console.log("path:" + ` ${baseURL}${path}`)
    return axios.get(`${baseURL}${path}`)
        .then((result) =>
            result.data
        )
        .catch((err) => {
            console.log(err)
        })
}
export const postData = (path, body) => {
    console.log("path" + ` ${baseURL}${path}`)
    return axios.post(`${baseURL}${path}`, body)
        .then((result) =>
            result.data
        )
        .catch((err) => {
            console.log("error post", err)
        })
}