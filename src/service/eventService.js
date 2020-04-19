import { get, post } from '../common/httpRequest';
import loginModel from '../model/loginModel';
import eventModel from '../model/eventModel';

class eventService {
    getEventData(data) {
        get('/api/survey', {}, {token: loginModel.loginData.loginYn}).then(response => {
            eventModel.eventDataList = response.data;
        });
    }
    surveyStart(eventId, link) {
        if(localStorage.getItem('accessToken') ) {
            post(`/api/survey/${eventId}/start`, {}, {token: true}).then(response => {
                link(`/survey/${response.data.surveyUserId}`);
            });
        }else{
            alert('로그인이 필요합니다.');
        }
        
    }
}
export default new eventService();