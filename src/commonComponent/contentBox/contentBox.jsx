import React, { Component } from 'react';
import style from './contentBox.module.scss';

class contentBox extends Component {
    render() {
        return (
            <div className={style.contentBox}>
                <div className={style.content} style={{ maxWidth : this.props.width+'px'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
contentBox.defaultProps = {
    width : 780
}
export default contentBox;