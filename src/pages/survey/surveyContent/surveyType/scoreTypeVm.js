import { observable, action } from 'mobx';
import surveyModel from '../../../../model/surveyModel';

class scoreTypeVm {
    get itemData() {
        return {min : JSON.parse(surveyModel.question.param0)[0] , max : JSON.parse(surveyModel.question.param0)[1]}
    }
    setData(val) {
        let param = {
            items : [{val : val}]
        }
        surveyModel.selectedData = param;
    }
    get selectedVal() {
        if(surveyModel.selectedData === null){
            return null;
        }else{
            return surveyModel.selectedData.items[0].val;
        }
    }
}
export default new scoreTypeVm();