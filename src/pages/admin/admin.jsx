import React, {Component, Fragment} from 'react';
import Header from '../../commonComponent/header/header';
import style from './admin.module.scss';
import {withRouter} from 'react-router';
import {observer} from 'mobx-react'
import { BrowserRouter as Router, Route, NavLink  } from 'react-router-dom';
import AdminUser from './user/list';
import AdminSurveyList from './survey/list';
import AdminSurveyDetail from './survey/detail';

@observer
class Admin extends Component {
    render() {
        return (<Fragment>
            <Header/>
            <Router>
            <div className={style.topInfo}>
                <div className={style.content}>
                    <div className={style.title}>관리자 페이지</div>
                    <ul className={style.adminMenu}>
                        <li><NavLink activeStyle={{ opacity: 1}} to='/admin/user'>사용자</NavLink></li>
                        <li><NavLink activeStyle={{ opacity: 1}} to='/admin/survey'>설문</NavLink></li>
                    </ul>
                </div>
            </div>
            <Route path="/admin/user" component={AdminUser} exact/>
            <Route path="/admin/survey" component={AdminSurveyList} exact/>
            <Route path="/admin/survey/:surveyId" component={AdminSurveyDetail} exact/>
            </Router>
        </Fragment>);
    }
}

export default withRouter(Admin);