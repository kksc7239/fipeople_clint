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
                slideNow : this.state.slideNow === 3 ? 0 : this.state.slideNow + 1
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
                        <div className={style.slideContent}>친구를 사귀고 싶은데,<br/>파악하는 시간이 너무 오래걸려요</div>
                        <div className={style.slideWriter}>서울시 강남구 도곡동 , 여, 21세, 대학생</div>
                    </div>
                    <div className={this.state.slideNow === 1 ? [style.slideItem, style.active].join(' ') : style.slideItem}>
                        <div className={style.slideItemImg}><img src="/img/slideImg1.png" alt="시계 아이콘" title="시계 아이콘"></img></div>
                        <div className={style.slideContent}>데이팅어플의 가벼운만남에 질렸어요<br/>공통사 많은 친구를 만나고싶어요</div>
                        <div className={style.slideWriter}>경기도 성남시 분당구 , 여, 24세, 취준생</div>
                    </div>
                    <div className={this.state.slideNow === 2 ? [style.slideItem, style.active].join(' ') : style.slideItem}>
                        <div className={style.slideItemImg}><img src="/img/slideImg1.png" alt="시계 아이콘" title="시계 아이콘"></img></div>
                        <div className={style.slideContent}>사회초년생인데 관련 분야의<br/>친구를 사귀고싶어요</div>
                        <div className={style.slideWriter}>서울시 강서구 화곡동 , 남, 27세, 직장인</div>
                    </div>
                    <div className={this.state.slideNow === 3 ? [style.slideItem, style.active].join(' ') : style.slideItem}>
                        <div className={style.slideItemImg}><img src="/img/slideImg1.png" alt="시계 아이콘" title="시계 아이콘"></img></div>
                        <div className={style.slideContent}>어플로 만난 새로운친구..<br/>잘맞지 않는거 같아서 어려웠어요</div>
                        <div className={style.slideWriter}>서울시 송파구 가락동 , 여, 23세, 대학생</div>
                    </div>
                </div>
                <div className={style.slideDot}>
                    <div className={this.state.slideNow === 0 ? [style.dot, style.active].join(' ') : style.dot} onClick={() => this.changeSlide(0)}></div>
                    <div className={this.state.slideNow === 1 ? [style.dot, style.active].join(' ') : style.dot} onClick={() => this.changeSlide(1)}></div>
                    <div className={this.state.slideNow === 2 ? [style.dot, style.active].join(' ') : style.dot} onClick={() => this.changeSlide(2)}></div>
                    <div className={this.state.slideNow === 3 ? [style.dot, style.active].join(' ') : style.dot} onClick={() => this.changeSlide(3)}></div>
                </div>
            </div>
        );
    }
}

export default slideContent;