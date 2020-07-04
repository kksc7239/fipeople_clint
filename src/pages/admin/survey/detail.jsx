import React, {Component, Fragment} from 'react';
import Content from '../../../commonComponent/contentBox/content';
import style from '../admin.module.scss';
import {withRouter} from 'react-router';
import {observer} from 'mobx-react'
import moment from 'moment';
import adminVm from '../adminVm'
import { Link } from 'react-router-dom';

@observer
class AdminSurvey extends Component {
    componentDidMount() {
        adminVm.loadSurveyDetail(this.props.match.params.surveyId);
    }

    constructor(props) {
        super(props);
    }

    render() {
        return adminVm.surveyDetail ? (
            <Fragment>
                <div className={style.contentBox} >
                    <Content width={960} padding={'30px 40px'}>
                        <table className={[style.table, style['table-bordered']].join(' ')}>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th style={{width:150}}>썸네일</th>
                                <th>이름</th>
                                <th>MBTI</th>
                                <th>성별</th>
                                <th>이메일</th>
                                { adminVm.surveyDetail.cols.map((col, i) => (<th key={i}>{col}</th>))}
                            </tr>
                            </thead>
                            <tbody>
                            { adminVm.surveyDetail.data.map(item => (
                                <tr key={item.survey_user_id}>
                                    <td>{item.survey_user_id}</td>
                                    <td><img src={item.image ? process.env.REACT_APP_API_URL + item.image.publicPath : '/img/profile_empty.png'} style={{width:'100%'}}/></td>
                                    <td>{item.name}</td>
                                    <td>{item.mbti}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.email}</td>
                                    { adminVm.surveyDetail.cols.map((col, i) => (<td key={i}>{item[`q${i}_res`]}</td>))}

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </Content>
                </div>
            </Fragment>
        ) : (<Fragment/>);
    }
}

export default withRouter(AdminSurvey);