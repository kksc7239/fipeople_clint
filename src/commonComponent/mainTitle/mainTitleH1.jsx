import React, { Component } from 'react';
import style from './mainTitleH1.module.scss';

class mainTitleH1 extends Component {
    render() {
        return (
            <h1 className={style.title} style={{ fontSize : this.props.fontSize}}>
                {this.props.children}
            </h1>
        );
    }
}
mainTitleH1.defaultProps = {
    fontSize : "30px"
}
export default mainTitleH1;