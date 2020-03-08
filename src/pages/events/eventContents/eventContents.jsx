import React, { Component } from 'react';
import ContentBox from '../../../commonComponent/contentBox/contentBox';
import MainTitleH1 from '../../../commonComponent/mainTitle/mainTitleH1';
import SubTitle from '../../../commonComponent/subTitle/subTitle';
import style from '../eventContents/eventContents.module.scss';
import MiniButton from '../../../commonComponent/button/miniButton'

class eventContents extends Component {
    render() {
        return (
            <div className={style.eventContents}>
                <ContentBox width={960}>
                    <MainTitleH1>친구들이 기다리고있어요!</MainTitleH1>
                    <div className={style.subTitle}>
                        <SubTitle>지금바로 <b>나와 잘 맞는</b> 친구들을 찾아보세요</SubTitle>
                    </div>
                    <div className={style.eventInner}>
                        <div className={style.eventItem}>
                            <div className={style.eventText}>
                                <div className={style.title}>첫 진행 이벤트!! 친구 찾아라!! 제목뭘로하지 첫 진행 이벤트!! 친구 찾아라!! 제목뭘로하지</div>
                                <div className={style.eventDate}>진행기간 : <span className={style.date}>2020.03.03 ~ 2020.04.04</span><br/> 발표일 : <span className={style.date}>2020.04.06</span></div>
                            </div>
                            <div className={style.btnArea}><MiniButton width="80%">시작하기</MiniButton></div>
                        </div>
                        <div className={style.eventItem}>
                            <div className={style.eventText}>
                                <div className={style.title}>첫 진행 이벤트!! 친구 찾아라!! 제목뭘로하지 첫 진행 이벤트!! 친구 찾아라!! 제목뭘로하지</div>
                                <div className={style.eventDate}>진행기간 : <span className={style.date}>2020.03.03 ~ 2020.04.04</span><br/> 발표일 : <span className={style.date}>2020.04.06</span></div>
                            </div>
                            <div className={style.btnArea}><MiniButton width="80%">시작하기</MiniButton></div>
                        </div>
                        <div className={style.eventItem}>
                            <div className={style.eventText}>
                                <div className={style.title}>첫 진행 이벤트!! 친구 찾아라!! 제목뭘로하지 첫 진행 이벤트!! 친구 찾아라!! 제목뭘로하지</div>
                                <div className={style.eventDate}>진행기간 : <span className={style.date}>2020.03.03 ~ 2020.04.04</span><br/> 발표일 : <span className={style.date}>2020.04.06</span></div>
                            </div>
                            <div className={style.btnArea}><MiniButton width="80%">시작하기</MiniButton></div>
                        </div>
                        <div className={style.eventItem}>
                            <div className={style.eventText}>
                                <div className={style.title}>첫 진행 이벤트!! 친구 찾아라!! 제목뭘로하지 첫 진행 이벤트!! 친구 찾아라!! 제목뭘로하지</div>
                                <div className={style.eventDate}>진행기간 : <span className={style.date}>2020.03.03 ~ 2020.04.04</span><br/> 발표일 : <span className={style.date}>2020.04.06</span></div>
                            </div>
                            <div className={style.btnArea}><MiniButton width="80%">시작하기</MiniButton></div>
                        </div>
                    </div>
                </ContentBox>
            </div>
        );
    }
}

export default eventContents;