import React, { PureComponent } from 'react';
import style from './footerInfo.module.scss';
import RoundButton from '../../../commonComponent/button/roundButton';
import { Route, Link } from 'react-router-dom';

class footerInfo extends PureComponent {
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.text}>
                    파이피플의 혜택<br/>지금 받으세요!
                </div>
                <div className={style.btnArea}><Link to='/ticket/ticket'><RoundButton>자세히 알아보기</RoundButton></Link></div>
            </div>
        );
    }
}

export default footerInfo;