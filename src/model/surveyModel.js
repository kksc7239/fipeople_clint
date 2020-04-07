import { observable } from 'mobx';
class SurveyModel {
    @observable questionStateList = [];
    @observable question = {};
}

export default new SurveyModel();