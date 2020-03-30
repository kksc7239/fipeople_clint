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
}
export default new EventContentsVm();