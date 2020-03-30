import { observable, action } from 'mobx';
class eventModel {
    @observable eventDataList = [];
}
export default new eventModel();