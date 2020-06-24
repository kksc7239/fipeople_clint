import React, {Component, Fragment} from 'react';
import Header from '../../commonComponent/header/header';
import Content from '../../commonComponent/contentBox/content';
import style from './admin.module.scss';
import {withRouter} from 'react-router';
import {observer} from 'mobx-react'
import adminVm from './adminVm'

@observer
class Admin extends Component {
    componentDidMount() {
        adminVm.loadStatistics();
    }

    constructor(props) {
        super(props);
    }

    render() {
        return adminVm.statistics && adminVm.users ? (
            <Fragment>
                <Header/>
                <div className={style.topInfo}>
                    <div className={style.content}>
                        <div className={style.title}>관리자 페이지</div>
                    </div>
                </div>
                <div className={style.contentBox} >
                    <Content width={960} padding={'30px 40px'}>
                        <table className={[style.table, style['table-bordered']].join(' ')}>
                            <thead>
                            <tr>
                                <th>REF</th>
                                <th>COUNT</th>
                            </tr>
                            </thead>
                            <tbody>
                            {adminVm.statistics.map(item => (
                                <tr key={item.ref || 'NULL'}>
                                    <td>{item.ref || 'NULL'}</td>
                                    <td>{item.count}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <table className={[style.table, style['table-bordered']].join(' ')}>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>E-MAIL</th>
                                <th>REF</th>
                            </tr>
                            </thead>
                            <tbody>
                            { adminVm.users.map(item => (
                                <tr key={item.user_id}>
                                    <td>{item.user_id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.ref === null ? 'NULL' : item.ref}</td>
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

export default withRouter(Admin);