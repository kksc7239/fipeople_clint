import React, { Component } from 'react';
import style from './radio.module.scss';

class radio extends Component {
    render() {
        return (
            <label className={style.radio}>
                <input type="radio" name={this.props.name} value={this.props.value} onChange={(e) => this.props.onChange(e)}></input>
                <span className={style.label}/>
                <span className={style.text}>{this.props.children}</span>
            </label>
        );
    }
}


export default radio;