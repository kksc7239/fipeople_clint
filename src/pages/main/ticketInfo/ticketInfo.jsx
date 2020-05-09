import React, { PureComponent } from 'react';
import style from './ticketInfo.module.scss';
import UnderlineText from '../../../commonComponent/text/underlineText';

class ticketInfo extends PureComponent {
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.title}>파이피플과 함께해요!</div>
                <div className={style.subTitle}><UnderlineText>언제끝날지 모르는 혜택</UnderlineText></div>
                <div className={style.ticketInfo}>지금바로 사용해보세요</div>
                <div className={style.image}><img src="/img/mainTicketImg.png" alt="할인 혜택 최대 30%" title="할인 혜택 최대 30%"></img></div>
            </div>
        );
    }
}

export default ticketInfo;