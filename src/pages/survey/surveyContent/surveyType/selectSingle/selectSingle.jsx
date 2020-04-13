import React, { Component } from 'react';
import style from './selectSingle.module.scss';
import selectSingleVm from './selectSingleVm';
import Radio from '../../../../../commonComponent/radio/radio';

class selectSingle extends Component {
    onChange(e) {
        selectSingleVm.setData(e.target.value);
    }
    render() {
        let itemEle = [];
        selectSingleVm.itemData.forEach((item) => {
            itemEle.push(
            <div className={style.row} key={item.survey_question_item_id}>
                <Radio name="items" value={item.survey_question_item_id} onChange={(e) => this.onChange(e)}>{item.txt}</Radio>
            </div>);
        })
        return (
            <div className={style.selectSingle}>
                {itemEle}
            </div>
        );
    }
}

export default selectSingle;