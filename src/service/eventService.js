import { get, post } from '../common/httpRequest';
import loginModel from '../model/loginModel';
import eventModel from '../model/eventModel';

class eventService {
    getEventData(data) {
        get('/api/survey', {}, {token: loginModel.loginData.loginYn}).then(response => {
            eventModel.eventDataList = response.data;
        });
    }
}
export default new eventService();