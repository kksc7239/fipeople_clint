import { observable } from 'mobx';
class SurveyModel {
    @observable questionStateList = [];
    @observable question = {};
    @observable surveyUserId = '';
    @observable selectedData = null;
    @observable surveyEndYn = false;
    @observable resultDate = '';
}

export default new SurveyModel();