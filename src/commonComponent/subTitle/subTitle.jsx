import React, { Component } from 'react';
import style from './subTitle.module.scss';

class subTitle extends Component {
    render() {
        return (
            <div className={style.subTitle}>
                {this.props.children}
            </div>
        );
    }
}

export default subTitle;