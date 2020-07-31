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

    get surveyList() {
        return adminModel.surveyList;
    }

    get surveyDetail() {
        return adminModel.surveyDetail;
    }

    loadUserStatistics() {
        adminService.loadUserStatistics()
    }

    loadSurveyList() {
        adminService.loadSurveyList()
    }

    loadSurveyDetail(surveyId) {
        adminService.loadSurveyDetail(surveyId)
    }
}
export default new AdminVm();