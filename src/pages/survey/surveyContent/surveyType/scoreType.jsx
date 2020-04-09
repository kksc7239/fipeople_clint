import React, { Component } from 'react';
import surveyContentVm from './scoreTypeVm';
import style from './scoreType.module.scss';

class scoreType extends Component {
    render() {
        return (
            <div className={style.scoreBox}>
                <span className={style.text}>{surveyContentVm.itemData.min}</span>
                <div className={style.circle}></div>
                <div className={style.circle}></div>
                <div className={style.circle}></div>
                <div className={style.circle}></div>
                <div className={style.circle}></div>
                <div className={style.circle}></div>
                <div className={style.circle}></div>
                <span className={style.text}>{surveyContentVm.itemData.max}</span>
            </div>
        );
    }
}

export default scoreType;