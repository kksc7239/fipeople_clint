import { post } from '../common/httpRequest';
import loginModel from '../model/loginModel';
import memberModel from '../model/memberModel';

class memberService {
    kakaoJoin(data) {
        post('/api/auth/oauth-kakao-join', {
            id : data.id,
            state : data.state,
            name : data.name || null,
            gender : data.gender || null,
            email : data.email || null
        }, {token: false}).then(response => {
            console.log(response);
            // loginModel, memberModel에 데이터 넣어주는거 해야함
        });
    }
}
export default new memberService();