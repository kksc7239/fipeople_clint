import { observable, action } from 'mobx';
class MemberModel {
    @observable memberData = {};
}
export default new MemberModel();