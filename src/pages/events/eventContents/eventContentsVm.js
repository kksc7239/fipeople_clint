import { observable, action } from 'mobx';
import eventService from '../../../service/eventService';
import eventModel from '../../../model/eventModel';
class EventContentsVm {
    getEvent() {
        eventService.getEventData();
    }
    get getEventDataList() {
        return eventModel.eventDataList;
    }
    goToSurvey(surveyUserId, eventId) {
        if(surveyUserId) { //서베이로 이동

        }else{ //surveyUserId생성
            eventService.surveyStart(eventId);
        }
    }
}
export default new EventContentsVm();