import React, { Component } from 'react';
import style from './miniButton.module.scss';

class miniButton extends Component {
    render() {
        console.log(this.props)
        return (
            <button type="button" className={this.props.active ? [style.button, style.active].join(' ') : style.button} style={{ width : this.props.width}}>{this.props.children}</button>
        );
    }
}
miniButton.defaultProps = {
    active : false,
    width : 'auto'
}
export default miniButton;