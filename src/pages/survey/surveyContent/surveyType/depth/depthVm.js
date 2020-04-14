import { observable, action } from 'mobx';
import surveyModel from '../../../../../model/surveyModel';

class depthVm {
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
        if(param.items.length === 0) {
            surveyModel.selectedData = null;
        }else{
            surveyModel.selectedData = param;
        }
    }
}
export default new depthVm();