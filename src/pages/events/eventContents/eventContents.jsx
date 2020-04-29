import React, { Component } from 'react';
import ContentBox from '../../../commonComponent/contentBox/contentBox';
import Content from '../../../commonComponent/contentBox/content';
import MainTitleH1 from '../../../commonComponent/mainTitle/mainTitleH1';
import SubTitle from '../../../commonComponent/subTitle/subTitle';
import style from '../eventContents/eventContents.module.scss';
import EventButton from '../../../commonComponent/button/eventButton';
import eventContentsVm from '../eventContents/eventContentsVm';
import { observer } from 'mobx-react';
import GetDate from '../../../common/getDate';
import { withRouter } from 'react-router';

@observer
class eventContents extends Component {
    componentDidMount() {
        eventContentsVm.getEvent();
    }
    goToSurvey(surveyUserId, eventId) {
        eventContentsVm.goToSurvey(surveyUserId, eventId, this.props.history.push);
    }
    render() {
        let eventItem = [];
        eventContentsVm.getEventDataList.forEach((item, index) => {
            let evBtn;
            let infoTxt;
            if(item.openstatus === 0) { //진행중
                infoTxt = <span>진행기간 : {GetDate.getDate(new Date(item.openDate))}<span className={style.space}></span> 발표일 : {GetDate.getDate(new Date(item.closeDate))}</span>
                if(item.surveyUserStatus === 1) {
                    evBtn = <EventButton width="100%" disabled={true}>잘 맞는 친구를 찾고 있습니다!</EventButton>
                }else{
                    if(item.itemCnt === item.progressitemcnt) {
                        evBtn = <EventButton width="100%" onClick={() => this.goToSurvey(item.surveyUserId, item.id)}>설문을 완료했습니다. 파이를 사용해주세요!</EventButton>;
                    }else{
                        evBtn = <EventButton width="100%" onClick={() => this.goToSurvey(item.surveyUserId, item.id)}>설문하러가기</EventButton>;
                    }
                }
            }
            if(item.openstatus === 1) { //진행전
                infoTxt = <span>{GetDate.getDate(new Date(item.openDate))} 진행예정입니다.</span>
                evBtn = <EventButton width="100%" disabled={true}>진행예정</EventButton>
            }
            if(item.openstatus === 2) {// 마감
                infoTxt = <span>{GetDate.getDate(new Date(item.openDate))} 다른행사에 참여해주세요</span>
                evBtn = <EventButton width="100%" disabled={true} useYn={false}>본 행사는 마감되었습니다!</EventButton>
            }
            eventItem.push(
                <div className={style.eventItem} key={index}>
                    <img src={process.env.REACT_APP_API_URL + item.thumbnailImg.publicPath}></img>
                    <div className={style.eventInfo}>
                        <div className={style.title}>{item.description}</div>
                        <div className={style.price}>{infoTxt}</div>
                        <div className={style.btnArea}>
                            {evBtn}
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className={style.eventContents}>
                <ContentBox>
                    <Content width={960}>
                        <MainTitleH1>친구들이 기다리고있어요!</MainTitleH1>
                        <div className={style.subTitle}>
                            <SubTitle>지금바로 <b>나와 잘 맞는</b> 친구들을 찾아보세요</SubTitle>
                        </div>
                        <div className={style.eventInner}>
                            {eventItem}
                        </div>
                    </Content>
                </ContentBox>
            </div>
        );
    }
}

export default withRouter(eventContents);