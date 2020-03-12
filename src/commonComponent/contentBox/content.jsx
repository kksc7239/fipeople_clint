import React, { Component } from 'react';
import style from './content.module.scss';

class content extends Component {
    render() {
        return (
            <div>
                <div className={style.content} style={{ maxWidth : this.props.width+'px'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
content.defaultProps = {
    width : 780
}
export default content;