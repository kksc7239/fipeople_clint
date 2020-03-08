import React, { Component } from 'react';
import style from './mainTitleH1.module.scss';

class mainTitleH1 extends Component {
    render() {
        return (
            <h1 className={style.title}>
                {this.props.children}
            </h1>
        );
    }
}

export default mainTitleH1;