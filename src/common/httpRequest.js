import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const httpRequest = axios.create({
    baseURL: baseURL
});

function get(url, body, option) {
    let requestOption = {}
    if (option.token) {
        requestOption.Authorization = localStorage.getItem('accessToken') //토큰넣어야댐
    }

    return httpRequest.get(url, body, {headers: requestOption})
}
function post(url, body, option) {
    let requestOption = {}
    if (option.token) {
        requestOption.Authorization = localStorage.getItem('accessToken') //토큰넣어야댐
    }

    return httpRequest.post(url, body, {headers: requestOption})
}

export { get, post };