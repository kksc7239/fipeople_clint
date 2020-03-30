import React, { Component } from 'react';
import ContentBox from '../../../commonComponent/contentBox/contentBox';
import Content from '../../../commonComponent/contentBox/content';
import MainTitleH1 from '../../../commonComponent/mainTitle/mainTitleH1';
import SubTitle from '../../../commonComponent/subTitle/subTitle';
import style from '../eventContents/eventContents.module.scss';
import EventButton from '../../../commonComponent/button/eventButton';
import eventContentsVm from '../eventContents/eventContentsVm';
import { Route, Link } from 'react-router-dom';

class eventContents extends Component {
    componentDidMount() {
        eventContentsVm.getEvent();
    }
    render() {
        return (
            <div className={style.eventContents}>
                <ContentBox>
                    <Content width={960}>
                        <MainTitleH1>친구들이 기다리고있어요!</MainTitleH1>
                        <div className={style.subTitle}>
                            <SubTitle>지금바로 <b>나와 잘 맞는</b> 친구들을 찾아보세요</SubTitle>
                        </div>
                        <div className={style.eventInner}>
                            <div className={style.eventItem}>
                                <img src="/img/tmp/eventTmpImg_1.png"></img>
                                <div className={style.eventInfo}>
                                    <div className={style.title}>잘맞는 친구찾기 5월 1기모집!</div>
                                    <div className={style.price}>15,000원</div>
                                    <div className={style.btnArea}>
                                        <Link to="/survey"><EventButton width="100%">진행기간 : 2020.03.01 ~ 2020.03.31<span className={style.space}></span> 발표일 : 05.02</EventButton></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={style.eventItem}>
                                <img src="/img/tmp/eventTmpImg_4.png"></img>
                                <div className={style.eventInfo}>
                                    <div className={style.title}>잘맞는 친구찾기 5월 1기모집!</div>
                                    <div className={style.price}>15,000원</div>
                                    <div className={style.btnArea}>
                                        <EventButton width="100%" disabled={true}>2020.04.01 진행예정</EventButton>
                                    </div>
                                </div>
                            </div>
                            <div className={style.eventItem}>
                                <img src="/img/tmp/eventTmpImg_3.png"></img>
                                <div className={style.eventInfo}>
                                    <div className={style.title}>잘맞는 친구찾기 5월 1기모집!</div>
                                    <div className={style.price}>15,000원</div>
                                    <div className={style.btnArea}>
                                        <EventButton width="100%" disabled={true} useYn={false}>본 행사는 마감되었습니다!</EventButton>
                                    </div>
                                </div>
                            </div>
                            <div className={style.eventItem}>
                                <img src="/img/tmp/eventTmpImg_2.png"></img>
                                <div className={style.eventInfo}>
                                    <div className={style.title}>잘맞는 친구찾기 5월 1기모집!</div>
                                    <div className={style.price}>15,000원</div>
                                    <div className={style.btnArea}>
                                        <EventButton width="100%" disabled={true} useYn={false}>본 행사는 마감되었습니다!</EventButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </ContentBox>
            </div>
        );
    }
}

export default eventContents;