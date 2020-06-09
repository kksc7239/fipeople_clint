import React, { Component } from 'react';
import Checkbox from '../../../../../commonComponent/checkbox/checkbox';
import selectMutipleVm from './selectMutipleVm';
import style from './selectMutiple.module.scss';

class selectMutiple extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValList: []
        }
    }
    onChange(e) {
        const checkedValList = this.state.checkedValList;
        let index;
        if(e.target.checked) {
            checkedValList.push(e.target.value);
        }else {
            index = checkedValList.indexOf(e.target.value);
            checkedValList.splice(index, 1);
        }
        this.setState({ checkedValList: checkedValList });
        selectMutipleVm.setData(checkedValList);
    }
    render() {
        let itemEle = [];
        selectMutipleVm.itemData.forEach((item) => {
            let isChecked = false;
            this.state.checkedValList.forEach((checkVal) => {
                if(parseInt(checkVal) === item.survey_question_item_id) isChecked = true;
            })
            itemEle.push(
            <div className={style.row} key={item.survey_question_item_id}>
                <Checkbox name="items" value={item.survey_question_item_id} checked={isChecked} onChange={(e) => this.onChange(e)}>{item.txt}</Checkbox>
            </div>);
        })
        return (
            <div className={style.selectMultiple}>
                {itemEle}
            </div>
        );
    }
}

export default selectMutiple;