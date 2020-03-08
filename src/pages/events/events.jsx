import React, { Component, Fragment } from 'react';
import Header from '../../commonComponent/header/header';
import EventContents from './eventContents/eventContents';

class events extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <EventContents></EventContents>
            </Fragment>
        );
    }
}

export default events;