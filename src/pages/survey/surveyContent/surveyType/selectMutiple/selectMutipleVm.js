import { observable, action } from 'mobx';
import surveyModel from '../../../../../model/surveyModel';

class selectMultipleVm {
    get itemData() {
        return surveyModel.question.items;
    }
    setData(checkedValList) {
        let param = {
            items : []
        };
        checkedValList.forEach((item) => {
            param.items.push({itemId : item});
        });
        surveyModel.selectedData = param;
    }
}
export default new selectMultipleVm();