import React, { Component } from 'react';
import style from './eventButton.module.scss';

class eventButton extends Component {
    render() {
        let classNameArr = [style.button];
        if(this.props.active) {
            classNameArr.push(style.active);
        }
        if(this.props.disabled) {
            classNameArr.push(style.disabled);
        }
        if(this.props.useYn === false) {
            classNameArr.push(style.notUse);
        }
        return (
            <button type="button" className={classNameArr.join(' ')} disabled={this.props.disabled} style={{ width : this.props.width}}>{this.props.children}</button>
        );
    }
}
eventButton.defaultProps = {
    active : false,
    width : 'auto',
    disabled : false,
    useYn : true
}
export default eventButton;