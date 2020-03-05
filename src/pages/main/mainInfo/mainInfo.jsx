import React, { Component } from 'react';
import style from './mainInfo.module.scss';
import UnderlineText from '../../../commonComponent/text/underlineText';

class mainInfo extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.title}><UnderlineText>나와 잘 맞는 친구 만들기!</UnderlineText></div>
                <div className={style.step}>
                    <div className={style.stepItem}>
                        <div><span className={style.stepNumber}>1</span></div>
                        <div className={style.stepImg}><img src="/img/mainStepIcon1.png" title="이용설명 step1" alt="이용설명 step1"></img></div>
                        <div className={style.stepTitle}>성향 설문</div>
                        <div className={style.stepContent}>딱 10분 ! 간단하게 체크하고<br/>나와 잘 맞는 친구 만들기</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default mainInfo;