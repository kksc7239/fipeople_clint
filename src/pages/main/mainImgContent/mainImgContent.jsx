import React, { PureComponent } from 'react';
import style from './mainImgContent.module.scss';
import RoundButton from '../../../commonComponent/button/roundButton';
import Typist from 'react-typist';
import { Route, Link } from 'react-router-dom';

class mainImgContent extends PureComponent {
    state = {
        TypistFinishYn : false,
        ih: window.innerHeight
    }
    componentDidMount() {
        alert(window.innerHeight);
        const reportWindowSize = () => {
            this.setState({
                ih : window.innerHeight
            })
            window.removeEventListener('resize', reportWindowSize);
        }
        window.addEventListener('resize', reportWindowSize);

        setTimeout(() => {
            this.setState({
                TypistFinishYn : true
            });
            setTimeout(() => {
                this.setState({
                    TypistFinishYn : false
                })
            }, 1000);
        }, 5500);

    }
    moveBottom() {
        window.scrollTo(0, window.innerHeight-80);
    }
    render() {
        return (
            <div className={style.mainImgContent} id="mainImgContent" style={{height:this.state.ih+'px'}}>
                <div className={style.content}>
                    <div className={style.subMessage}><Typist><Typist.Delay ms={3000} />MBTI를 기반으로 “공통점” 있는 친구를 만나보세요!</Typist></div>
                    <div className={style.mainMessage}><Typist><Typist.Delay ms={700} />나와 “잘 맞는” 친구만들기가<br/>힘들고 까다로우신가요?</Typist></div>
                    <div className={style.btnArea}><Link to='/events'><RoundButton active={this.state.TypistFinishYn}>지금 시작하기</RoundButton></Link></div>
                </div>
                <div className={style.scrollDown}>
                    <div className={style.scrollIcon}>
                        <div className={style.mousey} onClick = {() => this.moveBottom()}>
                            <div className={style.scroller}></div>
                        </div>
                    </div>
                    <div>Scroll Down</div>
                </div>
            </div>
        );
    }
}

export default mainImgContent;