import React, { Component } from 'react';
import style from './surveyContent.module.scss';
import ContentBox from '../../../commonComponent/contentBox/contentBox';
import MainTitleH1 from '../../../commonComponent/mainTitle/mainTitleH1';
import './radialProgress.scss';

class surveyContent extends Component {
    render() {
        return (
            <div className={style.surveyContent}>
                <ContentBox>
                    <MainTitleH1 fontSize="36px">친구 찾기</MainTitleH1>
                    <div className={style.surveyHead}>
                        <div className={[style.faceGraph, 'radialProgress-60'].join(' ')}>
                            <div className={style.faceGraphInner}></div>
                        </div>
                    </div>
                </ContentBox>
            </div>
        );
    }
}

export default surveyContent;