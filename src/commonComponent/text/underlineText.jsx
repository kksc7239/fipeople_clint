import React, { Component } from 'react';
import style from './underlineText.module.scss';

class underlineText extends Component {
    render() {
        return (
            <div className={style.underlineText}>
                {this.props.children}
            </div>
        );
    }
}
underlineText.defaultProps = {
    children : '텍스트를 입력하세요'
}
export default underlineText;