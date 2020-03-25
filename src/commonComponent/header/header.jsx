import React, { Component } from 'react';
import style from './header.module.scss';
import { Route, Link } from 'react-router-dom';

class header extends Component {
    kakaoLogin(e) {
        let kakaoWindow;
        e.preventDefault();
        window.open(e.currentTarget.href, 'kakaoPopup', 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no');
        window.popupMessage = function(data) {
            console.log(data);
        }
    }

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
                            {/* <a href='http://ec2-13-209-174-48.ap-northeast-2.compute.amazonaws.com/api/auth/oauth-kakao-init' target="_blank"><img src="/img/kakao_login_btn_small_ko.png" alt="카카오톡 로그인하기" title="카카오톡 로그인하기"></img></a> */}
                            <a onClick={(e) => this.kakaoLogin(e)} href='http://localhost:3000/static/temp/oauth-redirect.html?data=%7B%22success%22:true,%22isNew%22:true,%22state%22:%229f9ac873dbc14a1d9a5d6ab53e5a1539%22,%22id%22:1308988667,%22name%22:%22%EC%9E%A5%EB%B3%91%ED%98%84%22,%22image%22:%22data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABuAG4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDs6KKK/n0+zCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAor6W2r/do2r/dr9B/1H/6ffh/wTxf7W/ufj/wD5por6W2r/do2r/do/1H/wCn34f8EP7W/ufj/wAA+aaK+ltq/wB2jav92j/Uf/p9+H/BD+1v7n4/8A+aaK+ltq/3aNq/3aP9R/8Ap9+H/BD+1v7n4/8AAPmmivpbav8Ado2r/do/1H/6ffh/wQ/tb+5+P/APmmivpbav92jav92j/Uf/AKffh/wQ/tb+5+P/AAD5por6W2r/AHaNq/3aP9R/+n34f8EP7W/ufj/wB1FFFfoJ4wUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q==%22%7D' target="_blank"><img src="/img/kakao_login_btn_small_ko.png" alt="카카오톡 로그인하기" title="카카오톡 로그인하기"></img></a>
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