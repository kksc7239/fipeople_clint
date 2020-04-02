import { observable, action } from 'mobx';
import eventService from '../../../service/eventService';
import eventModel from '../../../model/eventModel';
import { Redirect } from 'react-router'
class EventContentsVm {
    getEvent() {
        eventService.getEventData();
    }
    get getEventDataList() {
        return eventModel.eventDataList;
    }
    goToSurvey(surveyUserId, eventId, link) {
        if(surveyUserId) { //서베이로 이동
            link(`/survey/${surveyUserId}`);
        }else{ //surveyUserId생성
            eventService.surveyStart(eventId, link);
        }
    }
}
export default new EventContentsVm();