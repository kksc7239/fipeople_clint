import { get, post } from '../common/httpRequest';
import surveyModel from '../model/surveyModel';

class surveyService {
    setSurvey(surveyUserId) {
        get(`/api/survey-user/${surveyUserId}`, {}, {token: true}).then(response => {
            surveyModel.questionStateList = response.data.questionList;
            surveyModel.question = response.data.question;
            surveyModel.surveyUserId = surveyUserId;
            surveyModel.selectedData = null;
            surveyModel.resultDate = response.data.survey.resultDate;
            if(surveyModel.questionStateList[surveyModel.questionStateList.length - 1].isFinish === true) {
                surveyModel.surveyEndYn = true;
            }
            console.log(response.data);
        });
    }
    submitSurvey(param) {
        post(`/api/survey-user/${surveyModel.surveyUserId}/question/${surveyModel.question.id}`, param, {token: true}).then(response => {
            this.setSurvey(surveyModel.surveyUserId);
        });
    }
    surveyEnd(eventId, link) {
        post(`/api/survey/${eventId}/submit`, {}, {token: true}).then(response => {
            link(`/events`);
        });
    }
}
export default new surveyService();