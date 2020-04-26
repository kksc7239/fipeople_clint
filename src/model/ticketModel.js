import { observable } from 'mobx';
class TicketModel {
    @observable tickets = null;
}

export default new TicketModel();