import React, { Component } from 'react';
import style from './header.module.scss';
import { Route, Link } from 'react-router-dom';

class header extends Component {
    render() {
        const headerStyle = [style.header];
        if(this.props.headerBackGround === true) {
            headerStyle.push(style.backGroundHeader);
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
                        <nav className={style.memberNav}>
                            {/* <ul>
                                <li><Link to='#'>회원가입</Link></li>
                                <li><Link to='#'>로그인</Link></li>
                            </ul> */}
                            {/* <Link to='#'><img src="/img/kakao_login_btn_small.png" alt="카카오톡 로그인하기" title="카카오톡 로그인하기"></img></Link> */}
                            <a href='http://ec2-13-209-174-48.ap-northeast-2.compute.amazonaws.com/api/auth/oauth-kakao-init' target="_blank"><img src="/img/kakao_login_btn_small_ko.png" alt="카카오톡 로그인하기" title="카카오톡 로그인하기"></img></a>
                        </nav>
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