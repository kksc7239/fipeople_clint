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
    submitData() {
        if(surveyModel.selectedData === null){
            alert('항목을 선택해주세요.');
        }else{
            surveyService.submitSurvey(surveyModel.selectedData);
        }
    }
}
export default new surveyContentVm();