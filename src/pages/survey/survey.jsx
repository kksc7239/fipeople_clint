import React, { Component, Fragment } from 'react';
import Header from '../../commonComponent/header/header';
import SurveyContent from './surveyContent/surveyContent';

class survey extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <SurveyContent></SurveyContent>
            </Fragment>
        );
    }
}

export default survey;