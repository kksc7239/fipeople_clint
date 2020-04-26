import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const httpRequest = axios.create({
    baseURL: baseURL
});

function get(url, body, option) {
    let requestOption = {}
    if (option.token) {
        requestOption.Authorization = 'Bearer ' + localStorage.getItem('accessToken')
    }
    return new Promise((resolve, reject) => {
        httpRequest.get(url, {params : body, headers: requestOption}).then((data) => {
            resolve(data);
        }).catch((error) => {
            if(error.response.data.message === 'ACCESS_TOKEN_EXPIRED') {
                httpRequest.post('/api/auth/refresh-token', {refreshToken : localStorage.getItem('refreshToken')}, {headers: requestOption}).then((res) => {
                    localStorage.setItem("accessToken", res.data.accessToken);
                    resolve(get(url, body, option));
                })
            }
        })
    })
}
function post(url, body, option) {
    let requestOption = {}
    if (option.token) {
        requestOption.Authorization = 'Bearer ' + localStorage.getItem('accessToken')
    }
    return new Promise((resolve, reject) => {
        httpRequest.post(url, body, {headers: requestOption}).then((data) => {
            resolve(data);
        }).catch((error) => {
            if(error.response.data.message === 'ACCESS_TOKEN_EXPIRED') {
                httpRequest.post('/api/auth/refresh-token', {refreshToken : localStorage.getItem('refreshToken')}, {headers: requestOption}).then((res) => {
                    localStorage.setItem("accessToken", res.data.accessToken);
                    resolve(post(url, body, option));
                })
            } else {
                reject(error);
            }
        })
    })
}

export { get, post };