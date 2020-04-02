import { get, post } from '../common/httpRequest';
import loginModel from '../model/loginModel';
import eventModel from '../model/eventModel';

class eventService {
    getEventData(data) {
        console.log(loginModel.loginData.loginYn);
        get('/api/survey', {}, {token: loginModel.loginData.loginYn}).then(response => {
            eventModel.eventDataList = response.data;
        });
    }
    surveyStart(eventId, link) {
        post(`/api/survey/${eventId}/start`, {}, {token: true}).then(response => {
            link(`/survey/${response.data.surveyUserId}`);
        });
    }
}
export default new eventService();