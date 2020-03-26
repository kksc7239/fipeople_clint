import { observable, action } from 'mobx';
import memberService from '../../service/memberService';
class HeaderVm {
    memberSetData(data) {
        if(data.isNew === true) { // 회원가입으로 보낸다
            console.log(data);
            memberService.kakaoJoin(data);
        }else { // 가입이미 된상태 토큰바로 만든다

        }
    }
}
export default new HeaderVm();