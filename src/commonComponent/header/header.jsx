import React, { Component } from 'react';
import style from './header.module.scss';

class header extends Component {
    render() {
        return (
            <header className={style.header}>
                <div className={style.content}>
                    <div className={style.logo}>FIPEOPLE</div>
                    <div>
                        <nav className={style.nav}>
                            <ul>
                                <li><a href='#'>이용방법</a></li>
                                <li><a href='#'>친구찾기</a></li>
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

export default header;