import { observable, action } from 'mobx';
import surveyModel from '../../../../../model/surveyModel';

class depthVm {
    get itemData() {
        return surveyModel.question.items;
    }
    setData(checkedValList, checkedVal) {
        let param = {
            items : []
        };
        const finalVal = checkedValList.filter((item) => {
            return item.parentId === parseInt(checkedVal)
        })
        finalVal.forEach((item) => {
            param.items.push({itemId : item.childId});
        });
        if(param.items.length === 0) {
            surveyModel.selectedData = null;
        }else{
            surveyModel.selectedData = param;
        }
    }
}
export default new depthVm();