import React, { Component, Fragment } from 'react';
import MainImgContdnt from './mainImgContent/mainImgContent';
import Header from '../../commonComponent/header/header';
import MainStory from './mainStory/mainStory';
import SlideContent from './slideContent/slideContent';
import MainInfo from './mainInfo/mainInfo';
import TicketInfo from './ticketInfo/ticketInfo';
import FooterInfo from './footerInfo/footerInfo';
import Footer from './footer/footer';
import GetUrlParams from '../../common/getUrlParams';

class main extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            headerBackGround : false
        }
    }
    componentDidMount() {
        localStorage.setItem("eventTarget",GetUrlParams('target'));
        window.addEventListener('scroll', function() {
            this.onScroll();
        }.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', function() {
            this.onScroll();
        }.bind(this));
    }
    onScroll() {
        if(window.scrollY > 80) {
            if(!this.state.headerBackGround) {
                this.setState({
                    headerBackGround : true
                })
            }
            
        }else  {
            if (this.state.headerBackGround) {
                this.setState({
                    headerBackGround : false
                })
            } 
        }
    }
    render() {
        return (
            <Fragment>
                <Header headerBackGround={this.state.headerBackGround}></Header>
                <MainImgContdnt></MainImgContdnt>
                <MainStory></MainStory>
                <SlideContent></SlideContent>
                <MainInfo></MainInfo>
                <TicketInfo></TicketInfo>
                <FooterInfo></FooterInfo>
                <Footer></Footer>
                <a href="https://pf.kakao.com/_xbxlrfxb/friend" target="_blank" style={{position:'fixed', bottom:'10px', right:'10px'}}><img src="/img/kakaoConsulting.png" style={{width:'100px'}}></img></a>
            </Fragment>
        );
    }
}

export default main;