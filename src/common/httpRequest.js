import axios from 'axios';

const baseURL = 'http://ec2-13-209-174-48.ap-northeast-2.compute.amazonaws.com';
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