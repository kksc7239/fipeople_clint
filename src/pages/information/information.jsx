import React, { Component, Fragment } from 'react';
import Header from '../../commonComponent/header/header';
import style from './information.module.scss';
import MainInfo from './mainInfo/mainInfo';
import UnderlineText from '../../commonComponent/text/underlineText';

class information extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className={style.topInfo}>
                    <MainInfo></MainInfo>
                </div>
                <div className={style.content}>
                    <UnderlineText>성향 설문</UnderlineText>
                    <div className={style.imageArea}><img src="/img/info1.png"/></div>
                    <div className={style.infoText}>
                        딱 10분! 친구 매칭을 위한 간단한 설문 조사를 진행해요.<br/>
                        이 설문은 나와 잘 맞는 친구를 만드는 데에 사용돼요.
                    </div>
                </div>
                <div className={style.content}>
                    <UnderlineText>기다림의 시간</UnderlineText>
                    <div className={style.imageArea}><img src="/img/info2.png"/></div>
                    <div className={style.infoText}>
                        자신의 티켓을 제출해요. 티켓을 제출한 다른 친구들과 매칭될 수 있어요.<br/>
                        자신이 선택하지 마세요. 인공지능이 앞서 작성한 설문을 기반해 공통률이 높은 친구끼리 매칭해 드립니다.<br/>
                        매달 10일 당신과 설램으로 가득한 새로운 친구를 매칭시켜드립니다.
                    </div>
                </div>
                <div className={style.content}>
                    <UnderlineText>친구 만들기</UnderlineText>
                    <div className={style.imageArea}><img src="/img/mainStory5.png"/></div>
                    <div className={style.infoText}>
                        친구와 매칭이 됐다면, 그 친구와 왜 매칭이 됐는지 매칭이유를 알려드려요.<br/>
                        파이 질문지를 바탕으로 메시지, 만남을 통해 다양한 이야기도 만들어 보아요.
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default information;