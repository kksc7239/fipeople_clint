import { get } from '../common/httpRequest';
import adminModel from '../model/adminModel';

class ticketService {
    async loadStatistics() {
        const response = await get(`/api/admin/users`, {}, {token: true});
        adminModel.statistics = response.data.statistics;
        adminModel.users = response.data.users;
    }
}
export default new ticketService();