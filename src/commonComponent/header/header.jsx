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
        window.open(`${process.env.REACT_APP_API_URL}/api/auth/oauth-kakao-init${loginPopupParam}`, 'kakaoPopup', 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no');
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
            <nav className={style.memberNav}>
                <a onClick={(e) => this.kakaoLogin(e)} href='#' target="_blank"><img src="/img/kakao_login_btn_small_ko.png" alt="카카오톡 로그인하기" title="카카오톡 로그인하기"/></a>
            </nav>
        }
        return (
            <header className={headerStyle.join(' ')}>
                <div className={style.content}>
                    <div className={style.logo}><Link to='/'><img src="/img/logo.png" alt="logo" title="logo"/></Link></div>
                    <div>
                        <nav className={style.nav}>
                            <ul>
                                <li><Link to='#'>이용방법</Link></li>
                                <li><Link to='/events'>친구찾기</Link></li>
                                <li><Link to='/ticket'>티켓구매</Link></li>
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