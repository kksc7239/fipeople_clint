import { observable, action } from 'mobx';
import memberService from '../../service/memberService';
import loginModel from '../../model/loginModel';
import memberModel from '../../model/memberModel';
class HeaderVm {
    memberSetData(data) {
        if(data.isNew === true) { // 회원가입으로 보낸다
            memberService.kakaoJoin(data);
        }else { // 가입이미 된상태 토큰바로 만든다
            memberService.logInStorage(data);
        }
    }
    get loginData() {
        return loginModel.loginData;
    }
    get memberData() {
        return memberModel.memberData;
    }
    loginState() {
        memberService.logInState();
    }
    logout() {
        if(confirm('로그아웃 하시겠습니까?')){
            memberService.removeLoginStorage()
        }
    }
}
export default new HeaderVm();