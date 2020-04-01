import React, { Component } from 'react';
import style from './footer.module.scss';
class footer extends Component {
    render() {
        return (
            <footer className={style.footer}>
                <div className={style.footerIn}>
                    <img src="/img/logoSimbol.png" className={style.simbol}/>
                    <div className={style.footerText}>
                        FOLLOWICE | 대표 김창균 | 사업자등록번호 848-29-00816 | E-Mail: 2ston67@naver.com<br/>
                        개인정보처리방침 | 서비스 이용약관<br/>
                        Copyright © 2019 FOLLOWICE All rights reserved. design by 파이피플<br/>
                    </div>
                </div>
            </footer>
        );
    }
}

export default footer;