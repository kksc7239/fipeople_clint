import { observable, action } from 'mobx';
import adminService from '../../service/adminService'
import adminModel from '../../model/adminModel'

class AdminVm {

    get users() {
        return adminModel.users;
    }
    get statistics() {
        return adminModel.statistics;
    }

    loadStatistics() {
        adminService.loadStatistics()
    }
}
export default new AdminVm();