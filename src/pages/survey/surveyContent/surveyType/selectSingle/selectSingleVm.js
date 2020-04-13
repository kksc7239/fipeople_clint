import { observable, action } from 'mobx';
import surveyModel from '../../../../../model/surveyModel';

class selectSingleVm {
    get itemData() {
        return surveyModel.question.items;
    }
    setData(id) {
        let param = {
            items : [{itemId : id}]
        }
        surveyModel.selectedData = param;
    }
}
export default new selectSingleVm();