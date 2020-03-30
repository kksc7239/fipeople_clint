import { get, post } from '../common/httpRequest';
import loginModel from '../model/loginModel';

class eventService {
    getEventData(data) {
        get('/api/survey', {}, {token: loginModel.loginData.loginYn}).then(response => {
            console.log(response);
        });
    }
}
export default new eventService();