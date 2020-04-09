import React, { Component } from 'react';
import style from './middleButton.module.scss';

class middleButton extends Component {
    render() {
        let classNameArr = [style.button];
        if(this.props.active) {
            classNameArr.push(style.active);
        }
        if(this.props.whiteType) {
            classNameArr.push(style.whiteType);
        }
        if(this.props.disabled) {
            classNameArr.push(style.disabled);
        }
        if(this.props.useYn === false) {
            classNameArr.push(style.notUse);
        }
        return (
            <button type="button" onClick={this.props.onClick} className={classNameArr.join(' ')} disabled={this.props.disabled} style={{ width : this.props.width}}>{this.props.children}</button>
        );
    }
}
middleButton.defaultProps = {
    active : false,
    width : 'auto',
    disabled : false,
    useYn : true,
    onClick : null,
    whiteType : false
}
export default middleButton;