import React, { Component } from 'react';
import style from './roundButton.module.scss';

class roundButton extends Component {
    render() {
        return (
            <button type="button" className={style.button}>{this.props.children}</button>
        );
    }
}

export default roundButton;