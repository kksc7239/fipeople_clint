import React, { PureComponent } from 'react';
import style from './footerInfo.module.scss';
import RoundButton from '../../../commonComponent/button/roundButton';

class footerInfo extends PureComponent {
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.text}>
                    파이피플의 혜택<br/>지금 받으세요!
                </div>
                <div className={style.btnArea}><RoundButton>자세히 알아보기</RoundButton></div>
            </div>
        );
    }
}

export default footerInfo;