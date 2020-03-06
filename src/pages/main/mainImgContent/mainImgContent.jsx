import React, { Component } from 'react';
import style from './mainImgContent.module.scss';
import RoundButton from '../../../commonComponent/button/roundButton';

class mainImgContent extends Component {
    render() {
        return (
            <div className={style.mainImgContent} id="mainImgContent">
                <div className={style.content}>
                    <div className={style.subMessage}>나와 “공통점” 있는 친구를 만나보세요!</div>
                    <div className={style.mainMessage}>나와 “잘 맞는” 친구만들기가<br/>힘들고 까다로우신가요?</div>
                    <div className={style.btnArea}><RoundButton>지금 시작하기</RoundButton></div>
                </div>
                <div className={style.scrollDown}>
                    <div class={style.scrollIcon}>
                        <div class={style.mousey}>
                            <div class={style.scroller}></div>
                        </div>
                    </div>
                    <div>Scroll Down</div>
                </div>
            </div>
        );
    }
}

export default mainImgContent;