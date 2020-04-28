import React, { Component } from 'react';
import style from './checkbox.module.scss';

class checkbox extends Component {
    render() {
        return (
            <label className={style.checkbox}>
                <input type="checkbox" name={this.props.name} value={this.props.value} onChange={(e) => this.props.onChange(e)}></input>
                <span className={style.label}/>
                <span className={style.text}>{this.props.children}</span>
            </label>
        );
    }
}

export default checkbox;