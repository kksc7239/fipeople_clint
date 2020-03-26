import { observable } from 'mobx';
class LoginModel {
    @observable loginData = {
        loginYn : false,
        accessToken : '',
        refreshToken : ''
    };
}
export default new LoginModel();