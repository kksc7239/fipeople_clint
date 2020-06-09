import React, { Component } from 'react';
import style from './checkbox.module.scss';

class checkbox extends Component {
    render() {
        return (
            <label className={style.checkbox}>
                <input type="checkbox" name={this.props.name} value={this.props.value} checked={this.props.checked} onChange={(e) => this.props.onChange(e)}></input>
                <span className={style.label}/>
                <span className={style.text}>{this.props.children}</span>
            </label>
        );
    }
}
checkbox.defaultProps = {
    checked : false
}
export default checkbox;