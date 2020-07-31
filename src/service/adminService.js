import { get } from '../common/httpRequest';
import adminModel from '../model/adminModel';

class adminService {
    async loadUserStatistics() {
        adminModel.statistics = null;
        adminModel.users  = null;
        const response = await get(`/api/admin/user`, {}, {token: true});
        adminModel.statistics = response.data.statistics;
        adminModel.users = response.data.users;
    }

    async loadSurveyList() {
        adminModel.surveyList = null;
        const response = await get(`/api/admin/survey`, {}, {token: true});
        adminModel.surveyList = response.data;
    }

    async loadSurveyDetail(surveyId) {
        adminModel.surveyDetail = null;
        const response = await get(`/api/admin/survey/${surveyId}`, {}, {token: true});
        adminModel.surveyDetail = response.data;
    }
}
export default new adminService();