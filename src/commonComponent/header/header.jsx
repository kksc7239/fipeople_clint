import React, { Component } from 'react';
import style from './header.module.scss';

class header extends Component {
    render() {
        const headerStyle = [style.header];
        if(this.props.headerBackGround === true) {
            headerStyle.push(style.backGroundHeader);
        }
        return (
            <header className={headerStyle.join(' ')}>
                <div className={style.content}>
                    <div className={style.logo}><a href='/'>FIPEOPLE</a></div>
                    <div>
                        <nav className={style.nav}>
                            <ul>
                                <li><a href='#'>이용방법</a></li>
                                <li><a href='/events'>친구찾기</a></li>
                                <li><a href='#'>티켓구매</a></li>
                            </ul>
                        </nav>
                        <nav className={style.memberNav}>
                            <ul>
                                <li><a href='#'>회원가입</a></li>
                                <li><a href='#'>로그인</a></li>
                            </ul>
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