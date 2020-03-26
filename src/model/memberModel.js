import { observable, action } from 'mobx';
class MemberModel {
    @observable memberData = {
        name : '',
        email : '',
        image : ''
    };
}
export default new MemberModel();