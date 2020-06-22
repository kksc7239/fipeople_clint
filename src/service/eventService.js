import { get, post } from '../common/httpRequest';
import loginModel from '../model/loginModel';
import eventModel from '../model/eventModel';
import headerVm from '../commonComponent/header/headerVm';

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
            }).catch(function (err) {
                if (err.response.data.message === 'SURVEY_IS_ALREADY_EXIST') {
                    link(`/survey/${err.response.data.data.surveyUserId}`);
                }
            });
        }else{
            let loginPopupParam = '';
            if (process.env.NODE_ENV === 'development') {
                loginPopupParam += `?redirect=${encodeURIComponent(process.env.REACT_APP_KAKAO_OAUTH_REDIRECT)}`
            }
            if(localStorage.getItem('eventTarget') && localStorage.getItem('eventTarget') !== '') {
                loginPopupParam += localStorage.getItem('eventTarget');
            }
            window.open(`${process.env.REACT_APP_API_URL}/api/auth/oauth-kakao-init${loginPopupParam}`, 'kakaoPopup', 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no');
            window.popupMessage = function(data) {
                headerVm.memberSetData(data);
                location.reload();
            }
        }
    }
}
export default new eventService();