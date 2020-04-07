import { observable, action } from 'mobx';
import surveyService from '../../../service/surveyService';
import surveyModel from '../../../model/surveyModel';
class surveyContentVm {
    setQuestion(surveyUserId) {
        surveyService.setSurvey(surveyUserId);
    }
    get questionProgress() {
        const qList = surveyModel.questionStateList;
        const maxLength = qList.length;
        let checkLength = 0; 
        qList.forEach((item) => {
            if(item.isfinish === true) checkLength ++;
        })
        return parseInt((checkLength/maxLength) * 100);
    }
    get question() {
        return surveyModel.question;
    }
}
export default new surveyContentVm();