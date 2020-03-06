import React, { Component } from 'react';
import style from './roundButton.module.scss';

class roundButton extends Component {
    render() {
        return (
            <button type="button" className={this.props.active ? [style.button, style.active].join(' ') : style.button}>{this.props.children}</button>
        );
    }
}
roundButton.defaultProps = {
    active : false
}
export default roundButton;