import { get, post } from '../common/httpRequest';
import loginModel from '../model/loginModel';
import memberModel from '../model/memberModel';
import ticketModel from '../model/ticketModel';

class ticketService {
    async loadTickets() {
        if (loginModel.loginData.loginYn) {
            const response = await get(`/api/ticket`, {}, {token: true});
            ticketModel.tickets = response.data;
        } else {
            ticketModel.tickets = [];
        }
    }
}
export default new ticketService();