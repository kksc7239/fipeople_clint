import { get, post } from '../common/httpRequest';
import surveyModel from '../model/surveyModel';

class surveyService {
    setSurvey(surveyUserId) {
        get(`/api/survey-user/${surveyUserId}`, {}, {token: true}).then(response => {
            surveyModel.questionStateList = response.data.questionList;
            surveyModel.question = response.data.question;
        });
    }
}
export default new surveyService();