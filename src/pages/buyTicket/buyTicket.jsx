import React, { Component, Fragment } from 'react';
import Header from '../../commonComponent/header/header';
import Content from '../../commonComponent/contentBox/content';
import style from './buyTicket.module.scss';

class buyTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketCount : 1
        }
    }
    get price() {
        const price = 20000;
        const x = this.state.ticketCount*price;
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    changeCount(type) {
        const count = this.state.ticketCount;
        if(type === 'min') {
            if(count !== 1) {
                this.setState({
                    ticketCount : count - 1
                });
            }
        }else{
            this.setState({
                ticketCount : count + 1
            });
        }
    }
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className={style.topInfo}>
                    <div className={style.content}>
                        <div className={style.sTitle}>취미부터 관심사까지 맞는 친구를 찾아보세요.</div>
                        <div className={style.title}>나와 잘 맞는 친구를<br/>찾아볼까요?</div>
                    </div>
                </div>
                <div className={style.contentBox}>
                    <Content width={420} padding={'30px 40px'}>
                        <div className={style.title}>나와 잘 맞는 친구 찾기</div>
                        <div className={style.ticketImg}><span className={style.bg}><img src="/img/ticketImg.png"/></span></div>
                        <div className={style.countWrapper}>
                        <button type="button" className={style.mBtn} onClick={() => this.changeCount('min')}></button><span>파이티켓 <span className={style.count}>{this.state.ticketCount}</span> 개</span><button type="button" className={style.pBtn} onClick={() => this.changeCount('plus')}></button>
                        </div>
                        <div className={style.subInfo}>* 파이 1개는 서비스 1번 입니다.</div>
                        <div className={style.price}>{this.price}원</div>
                        <div className={style.btnArea}>
                            <button type="button">kakao 공유</button><button type="button">구매하기</button>
                        </div>
                    </Content>
                </div>
            </Fragment>
        );
    }
}

export default buyTicket;