import React, { Component } from 'react';
import style from './surveyContent.module.scss';
import ContentBox from '../../../commonComponent/contentBox/contentBox';
import MainTitleH1 from '../../../commonComponent/mainTitle/mainTitleH1';
import surveyContentVm from './surveyContentVm';
import './radialProgress.scss';
import { observer } from 'mobx-react';
import Content from '../../../commonComponent/contentBox/content';

@observer
class surveyContent extends Component {
    componentDidMount() {
        this.getQuestion();
    }
    getQuestion() {
        surveyContentVm.setQuestion(this.props.surveyUserId);
    }
    render() {
        return (
            <div className={style.surveyContent}>
                <ContentBox>
                    <MainTitleH1 fontSize="36px">친구 찾기</MainTitleH1>
                    <div className={style.surveyHead}>
                        <div className={[style.faceGraph, `radialProgress-${surveyContentVm.questionProgress}`].join(' ')}>
                            <div className={style.faceGraphInner}></div>
                        </div>
                        <div className={style.bubbleWrap}>
                            <div className={style.bubble}>
                                {surveyContentVm.question.text}
                            </div>
                        </div>
                    </div>
                    <div className={style.surveyBody}>
                        <Content>
                            asd{/**surveyContentVm에서 타입별로 만들어야함 */}
                        </Content>
                    </div>
                </ContentBox>
            </div>
        );
    }
}

export default surveyContent;