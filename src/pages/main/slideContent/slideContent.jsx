import React, { Component } from 'react';
import style from './slideContent.module.scss';
import UnderlineText from '../../../commonComponent/text/underlineText';

class slideContent extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.title}>
                    <UnderlineText>친구 관계 고민 많았죠?</UnderlineText>
                </div>
            </div>
        );
    }
}

export default slideContent;