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
        adminVm.loadSurveyList();
    }

    constructor(props) {
        super(props);
    }

    render() {
        return adminVm.surveyList ? (
            <Fragment>
                <div className={style.contentBox} >
                    <Content width={960} padding={'30px 40px'}>
                        <table className={[style.table, style['table-bordered']].join(' ')}>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>이름</th>
                                <th>기간</th>
                                <th>발표일</th>
                                <th>-</th>
                            </tr>
                            </thead>
                            <tbody>
                            { adminVm.surveyList.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{`${moment(new Date(item.openDate)).format('YYYY-MM-DD HH:mm')} ~ ${moment(new Date(item.closeDate)).format('YYYY-MM-DD HH:mm')}`}</td>
                                    <td>{moment(new Date(item.resultDate)).format('YYYY-MM-DD HH:mm')}</td>
                                    <td><Link to={`/admin/survey/${item.id}`}>자세히</Link></td>
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