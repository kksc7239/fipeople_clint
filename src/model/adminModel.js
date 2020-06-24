import { observable } from 'mobx';
class AdminModel {
    @observable statistics = null;
    @observable users = null;
}

export default new AdminModel();