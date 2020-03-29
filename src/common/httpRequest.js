import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const httpRequest = axios.create({
    baseURL: baseURL
});

function get() {

}
function post(url, body, option) {
    let requestOption = {}
    if (option.token) {
        requestOption.Authorization = '' //토큰넣어야댐
    }

    return httpRequest.post(url, body, {headers: requestOption})
}

export { get, post };