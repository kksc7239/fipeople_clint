import React, { PureComponent } from 'react';
import style from './slideContent.module.scss';
import UnderlineText from '../../../commonComponent/text/underlineText';

class slideContent extends PureComponent {
    state = {
        slideNow : 0
    }
    changeSlide(chageNow) {
        if(chageNow !== this.state.slideNow) {
            clearInterval(this.interval);
            this.setState({
                slideNow : chageNow
            });
            this.startInterval();
        }
    }
    componentDidMount() {
        this.startInterval();
    }
    startInterval() {
        this.interval = setInterval(() => {
            this.setState({
                slideNow : this.state.slideNow === 2 ? 0 : this.state.slideNow + 1
            });
        }, 3000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.title}>
                    <UnderlineText>친구 관계 고민 많았죠?</UnderlineText>
                </div>
                <div className={style.slideBox}>
                    <div className={this.state.slideNow === 0 ? [style.slideItem, style.active].join(' ') : style.slideItem}>
                        <div className={style.slideItemImg}><img src="/img/slideImg1.png" alt="시계 아이콘" title="시계 아이콘"></img></div>
                        <div className={style.slideContent}>친구를 사귀고 싶은데,<br/>상대방을 파악하는데 시간이 너무 오래걸려요</div>
                        <div className={style.slideWriter}>서울시 강남구 도곡동 **남, 21세, 대학생</div>
                    </div>
                    <div className={this.state.slideNow === 1 ? [style.slideItem, style.active].join(' ') : style.slideItem}>
                        <div className={style.slideItemImg}><img src="/img/slideImg1.png" alt="시계 아이콘" title="시계 아이콘"></img></div>
                        <div className={style.slideContent}>2번슬라이드<br/>입니다</div>
                        <div className={style.slideWriter}>서울시 강남구 도곡동 **남, 21세, 대학생</div>
                    </div>
                    <div className={this.state.slideNow === 2 ? [style.slideItem, style.active].join(' ') : style.slideItem}>
                        <div className={style.slideItemImg}><img src="/img/slideImg1.png" alt="시계 아이콘" title="시계 아이콘"></img></div>
                        <div className={style.slideContent}>3번슬라이다<br/>입니다</div>
                        <div className={style.slideWriter}>서울시 강남구 도곡동 **남, 21세, 대학생</div>
                    </div>
                </div>
                <div className={style.slideDot}>
                    <div className={this.state.slideNow === 0 ? [style.dot, style.active].join(' ') : style.dot} onClick={() => this.changeSlide(0)}></div>
                    <div className={this.state.slideNow === 1 ? [style.dot, style.active].join(' ') : style.dot} onClick={() => this.changeSlide(1)}></div>
                    <div className={this.state.slideNow === 2 ? [style.dot, style.active].join(' ') : style.dot} onClick={() => this.changeSlide(2)}></div>
                </div>
            </div>
        );
    }
}

export default slideContent;