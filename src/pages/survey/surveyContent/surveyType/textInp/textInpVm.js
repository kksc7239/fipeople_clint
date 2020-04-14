import { observable, action } from 'mobx';
import surveyModel from '../../../../../model/surveyModel';

class textInpVm {
    setData(val) {
        let param = {
            items : [{val : val}]
        }
        surveyModel.selectedData = param;
    }
}
export default new textInpVm();