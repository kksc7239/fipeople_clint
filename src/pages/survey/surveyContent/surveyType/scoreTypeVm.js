import { observable, action } from 'mobx';
import surveyModel from '../../../../model/surveyModel';
class surveyContentVm {
    get itemData() {
        return {min : JSON.parse(surveyModel.question.param0)[0] , max : JSON.parse(surveyModel.question.param0)[1]}
    }
}
export default new surveyContentVm();