import React, { Component } from 'react';
import style from './textInp.module.scss';
import textInpVm from './textInpVm';

class textInp extends Component {
    onKeyUp(e) {
        textInpVm.setData(e.target.value);
    }
    render() {
        return (
            <textarea className={style.textarea} placeholder="입력해주세요" onKeyUp={(e) => this.onKeyUp(e)}></textarea>
        );
    }
}

export default textInp;