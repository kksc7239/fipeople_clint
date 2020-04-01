import React, { Component, Fragment } from 'react';
import MainImgContdnt from './mainImgContent/mainImgContent';
import Header from '../../commonComponent/header/header';
import MainStory from './mainStory/mainStory';
import SlideContent from './slideContent/slideContent';
import MainInfo from './mainInfo/mainInfo';
import TicketInfo from './ticketInfo/ticketInfo';
import FooterInfo from './footerInfo/footerInfo';
import Footer from './footer/footer';

class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerBackGround : false
        }
    }
    componentDidMount() {
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
        if(window.scrollY > 80){
            this.setState({
                headerBackGround : true
            })
        }else{
            this.setState({
                headerBackGround : false
            })
        };
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
            </Fragment>
        );
    }
}

export default main;