import React, { Component } from 'react';
import style from './mainImgContent.module.scss';
import RoundButton from '../../../commonComponent/button/roundButton';
import Typist from 'react-typist';

class mainImgContent extends Component {
    state = {
        TypistFinishYn : false
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                TypistFinishYn : true
            });
            setTimeout(() => {
                this.setState({
                    TypistFinishYn : false
                })
            }, 1000);
        }, 4700);
    }
    render() {
        return (
            <div className={style.mainImgContent} id="mainImgContent">
                <div className={style.content}>
                    <div className={style.subMessage}><Typist><Typist.Delay ms={3000} />나와 “공통점” 있는 친구를 만나보세요!</Typist></div>
                    <div className={style.mainMessage}><Typist><Typist.Delay ms={700} />나와 “잘 맞는” 친구만들기가<br/>힘들고 까다로우신가요?</Typist></div>
                    <div className={style.btnArea}><RoundButton active={this.state.TypistFinishYn}>지금 시작하기</RoundButton></div>
                </div>
                <div className={style.scrollDown}>
                    <div className={style.scrollIcon}>
                        <div className={style.mousey}>
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