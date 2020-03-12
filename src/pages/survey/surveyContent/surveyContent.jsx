import React, { Component } from 'react';
import style from './surveyContent.module.scss';
import ContentBox from '../../../commonComponent/contentBox/contentBox';
import MainTitleH1 from '../../../commonComponent/mainTitle/mainTitleH1';

class surveyContent extends Component {
    render() {
        return (
            <div className={style.surveyContent}>
                <ContentBox>
                    <MainTitleH1 fontSize="36px">친구 찾기</MainTitleH1>
                    <div className={style.surveyHead}>
                        <div className={style.faceGraph}>
                            <div className={style.faceGraphInner}>
                                <div className={style.progress}>

                                </div>
                            </div>
                        </div>
                    </div>
                </ContentBox>
            </div>
        );
    }
}

export default surveyContent;