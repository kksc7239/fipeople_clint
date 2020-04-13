import React, { Component } from 'react';
import style from './checkbox.module.scss';

class checkbox extends Component {
    render() {
        return (
            <label className={style.checkbox}>
                <input type="checkbox" name={this.props.name} value={this.props.value} onChange={(e) => this.props.onChange(e)}></input>
                <span className={style.label}/>
                {this.props.children}
            </label>
        );
    }
}

export default checkbox;