import { observable, action } from 'mobx';
import eventService from '../../../service/eventService';
class HeaderVm {
    getEvent() {
        eventService.getEventData();
    }
}
export default new HeaderVm();