import React, { Component } from 'react';
import style from './surveyContent.module.scss';
import ContentBox from '../../../commonComponent/contentBox/contentBox';
import MainTitleH1 from '../../../commonComponent/mainTitle/mainTitleH1';
import surveyContentVm from './surveyContentVm';
import './radialProgress.scss';
import { observer } from 'mobx-react';
import Content from '../../../commonComponent/contentBox/content';
import ScoreType from './surveyType/scoreType/scoreType';
import SelectSingle from './surveyType/selectSingle/selectSingle';
import SelectMutiple from './surveyType/selectMutiple/selectMutiple';
import Depth from './surveyType/depth/depth';
import TextInp from './surveyType/textInp/textInp';
import MiddleButton from '../../../commonComponent/button/middleButton';
import { withRouter } from 'react-router';

@observer
class surveyContent extends Component {
    componentDidMount() {
        this.getQuestion();
    }
    getQuestion() {
        surveyContentVm.setQuestion(this.props.surveyUserId);
    }
    goBack() {
        this.props.history.goBack();
    }
    goNext() {
        surveyContentVm.submitData();
    }
    render() {
        let surveyTypeContent;
        let questionTxt = surveyContentVm.question.text;
        let btnText = '다음';
        if(surveyContentVm.surveyEndYn === false) {
            if(surveyContentVm.question.type === "SCORE_7") {
                surveyTypeContent = <ScoreType/>
            }else if(surveyContentVm.question.type === "SELECT_SINGLE") {
                surveyTypeContent = <SelectSingle/>
            }else if(surveyContentVm.question.type === "SELECT_MULTIPLE") {
                surveyTypeContent = <SelectMutiple/>
            }else if(surveyContentVm.question.type === "DEPTH") {
                surveyTypeContent = <Depth/>
            }else if(surveyContentVm.question.type === "TXT_INP") {
                surveyTypeContent = <TextInp/>
            }
        }else{
            surveyContentVm.loadTickets();
            btnText = '매칭 시작하기';
            questionTxt = <span>매칭을 위한 설문을 완료했습니다.<br/> 파이를 사용하여<br/> 나와 잘 맞는 친구를 찾아보세요!</span>;
            surveyTypeContent = <span style={{lineHeight:'1.2'}}>파이를 사용해 매칭을 시작하면<br/><span style={{color:'#ff6f61'}}>{surveyContentVm.resultDate}</span>에 서로에게 매칭과 함께 질문지가 발송됩니다.</span>;
        }
        return (
            <div className={style.surveyContent}>
                <ContentBox>
                    <MainTitleH1 fontSize="36px">친구 찾기</MainTitleH1>
                    <div className={style.surveyHead}>
                        <div className={[style.faceGraph, `radialProgress-${100 - surveyContentVm.questionProgress}`].join(' ')}>
                            <div className={style.faceGraphInner}></div>
                        </div>
                        <div className={style.bubbleWrap}>
                            <div className={style.bubble}>
                                {questionTxt}
                            </div>
                        </div>
                        <div className={style.mbubbleWrap}>
                            <div className={style.bubble}>
                                {questionTxt}
                            </div>
                        </div>
                    </div>
                    <div className={style.surveyBody}>
                        <Content>
                            {surveyTypeContent}
                        </Content>
                    </div>
                    <div className={style.btnArea}>
                        {/* <MiddleButton width="49%" whiteType={true} onClick={() => this.goBack()}>이전</MiddleButton><MiddleButton width="49%" onClick={() => this.goNext()}>다음</MiddleButton> */}
                        <MiddleButton width="100%" onClick={() => this.goNext()}>{btnText}</MiddleButton>
                    </div>
                </ContentBox>
            </div>
        );
    }
}

export default withRouter(surveyContent);