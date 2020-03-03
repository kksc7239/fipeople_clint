import React, { Component, Fragment } from 'react';
import MainImgContdnt from './mainImgContent/mainImgContent';
import Header from '../../commonComponent/header/header';

class main extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <MainImgContdnt></MainImgContdnt>
            </Fragment>
        );
    }
}

export default main;