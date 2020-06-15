import React, { PureComponent } from 'react';
import style from './footer.module.scss';
class footer extends PureComponent {
    render() {
        return (
            <footer className={style.footer}>
                <div className={style.footerIn}>
                    <img src="/img/logoSimbol.png" className={style.simbol}/>
                    <div className={style.footerText}>
                        FOLLOWICE | 대표 김창균 | 사업자등록번호 848-29-00816 | E-Mail: 2ston67@naver.com<br/>
                        <a target="_blank" href="https://www.notion.so/FOLLOW-ICE-ea5c68e8b1d6494188d37655eb3a34af">개인정보처리방침</a> | <a target="_blank" href="https://www.notion.so/FOLLOW-ICE-b99196806ae9471593fde959f5f672eb">서비스 이용약관</a><br/>
                        Copyright © 2019 FOLLOWICE All rights reserved. design by 파이피플<br/>
                    </div>
                </div>
            </footer>
        );
    }
}

export default footer;