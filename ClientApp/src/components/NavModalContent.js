import React, { Component } from 'react';
import '../Styles/NavModalContent.css';

export default class NavModalContent extends Component {
    render() {
        return (
            <div className="NavModalContentDiv">
                <button onClick={this.props.goToRegisterPage} className="navBtn">Registration</button>
                <button onClick={this.props.goToBlogBodyBtn} className="navBtn">Blog Main</button>
                <button className="navBtn logout">Log-Out</button>
            </div>
        )
    }
}
