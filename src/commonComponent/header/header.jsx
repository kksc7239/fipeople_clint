import React, { Component } from 'react';
import style from './header.module.scss';
import headerVm from './headerVm';
import { Route, Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
class header extends Component {
    componentDidMount() {
        //로그인상태면 로컬스토리지에 저장되어있는것들을 상태에 반영한다
        if(localStorage.getItem('loginYn') === 'true') {
            headerVm.loginState();
        }
    }
    kakaoLogin(e) {
        let kakaoWindow;

        let loginPopupParam = '';
        if (process.env.NODE_ENV === 'development') {
            loginPopupParam = `?redirect=${encodeURIComponent(process.env.REACT_APP_KAKAO_OAUTH_REDIRECT)}`
        }

        e.preventDefault();
        window.open(`${process.env.REACT_APP_API_URL}/auth/oauth-kakao-init${loginPopupParam}`, 'kakaoPopup', 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no');
        window.popupMessage = function(data) {
            headerVm.memberSetData(data);
        }
    }
    logout() {
        headerVm.logout();
    }
    render() {
        let memberNav;
        const headerStyle = [style.header];
        if(this.props.headerBackGround === true) {
            headerStyle.push(style.backGroundHeader);
        }
        if(headerVm.loginData.loginYn) {//로그인 대있으면
            memberNav = 
            <nav className={style.memberNav}>
                <img className={style.profileImg} alt="프로필사진" title="프로필사진" src={headerVm.memberData.image || '/img/profile_empty.png'}/>
                <span className={style.memberText}>{headerVm.memberData.name}님</span>
                <button type="button" className={style.logout} onClick={() => this.logout()}>Logout</button>
            </nav>
        }else{
            memberNav = 
            // <ul>
            //     <li><Link to='#'>회원가입</Link></li>
            //     <li><Link to='#'>로그인</Link></li>
            // </ul>
            // <Link to='#'><img src="/img/kakao_login_btn_small.png" alt="카카오톡 로그인하기" title="카카오톡 로그인하기"></img></Link>
            // 로그인
            //<a href='http://ec2-13-209-174-48.ap-northeast-2.compute.amazonaws.com/api/auth/oauth-kakao-init' target="_blank"><img src="/img/kakao_login_btn_small_ko.png" alt="카카오톡 로그인하기" title="카카오톡 로그인하기"></img></a>
            // 가입
            //<a onClick={(e) => this.kakaoLogin(e)} href='http://localhost:3000/static/temp/oauth-redirect.html?data=%7B"success":true,"isNew":true,"state":"e391d1f3e2a44279a2680bd0e8821bb3","id":1308988667,"name":"장병현","image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABuAG4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDs6KKK/n0+zCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAor6W2r/do2r/dr9B/1H/6ffh/wTxf7W/ufj/wD5por6W2r/do2r/do/1H/wCn34f8EP7W/ufj/wAA+aaK+ltq/wB2jav92j/Uf/p9+H/BD+1v7n4/8A+aaK+ltq/3aNq/3aP9R/8Ap9+H/BD+1v7n4/8AAPmmivpbav8Ado2r/do/1H/6ffh/wQ/tb+5+P/APmmivpbav92jav92j/Uf/AKffh/wQ/tb+5+P/AAD5por6W2r/AHaNq/3aP9R/+n34f8EP7W/ufj/wB1FFFfoJ4wUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q=="%7D' target="_blank"><img src="/img/kakao_login_btn_small_ko.png" alt="카카오톡 로그인하기" title="카카오톡 로그인하기"></img></a>
            // 이미가입댄거
            <nav className={style.memberNav}>
                <a onClick={(e) => this.kakaoLogin(e)} href='#' target="_blank"><img src="/img/kakao_login_btn_small_ko.png" alt="카카오톡 로그인하기" title="카카오톡 로그인하기"/></a>
            </nav>
        }
        return (
            <header className={headerStyle.join(' ')}>
                <div className={style.content}>
                    <div className={style.logo}><Link to='/'>FIPEOPLE</Link></div>
                    <div>
                        <nav className={style.nav}>
                            <ul>
                                <li><Link to='#'>이용방법</Link></li>
                                <li><Link to='/events'>친구찾기</Link></li>
                                <li><Link to='#'>티켓구매</Link></li>
                            </ul>
                        </nav>
                        {memberNav}
                    </div>
                </div>
            </header>
        );
    }
}
header.defaultProps = {
    headerBackGround: true
};
export default header;