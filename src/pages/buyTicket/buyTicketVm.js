import { observable, action } from 'mobx';
import ticketService from '../../service/ticketService';
import ticketModel from '../../model/ticketModel'
import memberModel from '../../model/memberModel'

class BuyTicketVm {

    get tickets() {
        return ticketModel.tickets;
    }

    get orderInfo() {
        return {
            name: memberModel.memberData.name,
            email: memberModel.memberData.email,
        }
}

    loadTickets() {
        ticketService.loadTickets()
    }
}
export default new BuyTicketVm();