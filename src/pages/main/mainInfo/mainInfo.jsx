import React, { PureComponent } from 'react';
import style from './mainInfo.module.scss';
import UnderlineText from '../../../commonComponent/text/underlineText';

class mainInfo extends PureComponent {
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
                    <div className={style.stepItem}>
                        <div><span className={style.stepNumber}>2</span></div>
                        <div className={style.stepImg}><img src="/img/mainStepIcon2.png" title="이용설명 step2" alt="이용설명 step2"></img></div>
                        <div className={style.stepTitle}>기다림의 시간</div>
                        <div className={style.stepContent}>매달 10일!<br/>새로운 친구가 매칭됩니다.</div>
                    </div>
                    <div className={style.stepItem}>
                        <div><span className={style.stepNumber}>3</span></div>
                        <div className={style.stepImg}><img src="/img/mainStepIcon3.png" title="이용설명 step3" alt="이용설명 step3"></img></div>
                        <div className={style.stepTitle}>친구 만들기</div>
                        <div className={style.stepContent}>매칭 이유와 파이 질문지를<br/>바탕으로 다양한 이야기 만들기!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default mainInfo;