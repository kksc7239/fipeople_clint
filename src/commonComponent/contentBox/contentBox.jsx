import React, { Component } from 'react';
import style from './contentBox.module.scss';

class contentBox extends Component {
    render() {
        return (
            <div className={style.contentBox}>
                <div className={style.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default contentBox;