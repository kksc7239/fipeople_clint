import { observable, action } from 'mobx';
import surveyService from '../../../service/surveyService';
import surveyModel from '../../../model/surveyModel';
import GetDate from '../../../common/getDate';
import ticketService from '../../../service/ticketService';
import ticketModel from '../../../model/ticketModel';
class surveyContentVm {
    setQuestion(surveyUserId) {
        surveyService.setSurvey(surveyUserId);
    }
    get questionProgress() {
        const qList = surveyModel.questionStateList;
        const maxLength = qList.length;
        let checkLength = 0; 
        qList.forEach((item) => {
            if(item.isFinish === true) checkLength ++;
        })
        return parseInt((checkLength/maxLength) * 100);
    }
    get question() {
        return surveyModel.question;
    }
    get surveyEndYn() {
        return surveyModel.surveyEndYn;
    }
    get resultDate() {
        return GetDate.getDate(new Date(surveyModel.resultDate));
    }
    loadTickets() {
        ticketService.loadTickets();
    }
    submitData(link) {
        if(surveyModel.surveyEndYn === true) { //질문끝남
            if(ticketModel.tickets) {
                if(ticketModel.tickets.length === 0) {
                    alert('파이가 없습니다. 파이를 구매해보세요!'); //구매링크로 이동
                    link(`/ticket/${surveyModel.surveyUserId}`);
                }else {
                    //제출 실행
                    if(confirm("파이를 사용하시겠습니까?")) {
                        surveyService.surveyEnd(surveyModel.surveyUserId,link);
                    }
                }
            }
        }else{ //다음질문으로 넘어감
            if(surveyModel.selectedData === null){
                alert('항목을 선택해주세요.');
            }else{
                surveyService.submitSurvey(surveyModel.selectedData);
            }
        }
        
    }
}
export default new surveyContentVm();