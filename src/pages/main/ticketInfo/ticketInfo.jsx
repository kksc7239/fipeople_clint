import React, { Component } from 'react';
import style from './ticketInfo.module.scss';
import UnderlineText from '../../../commonComponent/text/underlineText';

class ticketInfo extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.title}>이용할수록 친구와의 놀거리가 늘어난다!</div>
                <div className={style.subTitle}><UnderlineText>파이피플의 정기구독 혜택</UnderlineText></div>
                <div className={style.ticketInfo}>이용 기간에 따라 순차적으로 할인</div>
                <div className={style.image}><img src="/img/mainTicketImg.png" alt="할인 혜택 최대 30%" title="할인 혜택 최대 30%"></img></div>
            </div>
        );
    }
}

export default ticketInfo;