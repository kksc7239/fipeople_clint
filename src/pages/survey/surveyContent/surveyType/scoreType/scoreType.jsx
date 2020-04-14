import React, { Component } from 'react';
import scoreTypeVm from './scoreTypeVm';
import style from './scoreType.module.scss';
import { observer } from 'mobx-react';

@observer
class scoreType extends Component {
    clickCircle(val) {
        scoreTypeVm.setData(val);
    }
    render() {
        let circleEle = [];
        for(let i = 0; i < 7; i ++){
            let className = [style.circle];
            if(scoreTypeVm.selectedVal === i) className.push(style.selected);
            circleEle.push(<div className={className.join(' ')} key={i} onClick={() => this.clickCircle(i)}></div>);
        }
        return (
            <div className={style.scoreBox}>
                <span className={style.text}>{scoreTypeVm.itemData.min}</span>
                {circleEle}
                <span className={style.text}>{scoreTypeVm.itemData.max}</span>
            </div>
        );
    }
}
export default scoreType;