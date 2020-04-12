import { observable } from 'mobx';
class SurveyModel {
    @observable questionStateList = [];
    @observable question = {};
    @observable surveyUserId = '';
    @observable selectedData = null;
}

export default new SurveyModel();