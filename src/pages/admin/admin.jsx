import React, {Component, Fragment} from 'react';
import Header from '../../commonComponent/header/header';
import style from './admin.module.scss';
import {withRouter} from 'react-router';
import {observer} from 'mobx-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminUser from './user/list';

@observer
class Admin extends Component {
    render() {
        return (<Fragment>
            <Header/>
            <div className={style.topInfo}>
                <div className={style.content}>
                    <div className={style.title}>관리자 페이지</div>
                </div>
            </div>
            <Router>
                <Route path="/user" component={AdminUser} exact/>
                <Route path="/survey" component={AdminUser} exact/>
                <Route path="/survey/:surveyId" component={AdminUser} exact/>
            </Router>
        </Fragment>);
    }
}

export default withRouter(Admin);