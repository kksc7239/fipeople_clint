import { observable } from 'mobx';
class AdminModel {
    @observable statistics = null;
    @observable users = null;
    @observable surveyList = null;
    @observable surveyDetail = null;
}

export default new AdminModel();