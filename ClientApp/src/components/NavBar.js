import React, { Component } from 'react';
import { withRouter } from "react-router";
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../Styles/NavBar.css';

class NavBar extends Component {


    state = {
        navToggle: false
    }


    goToBlogBodyBtn = () => {
        this.props.history.push('/')
    }


    goToRegisterPage = () => {
        this.props.history.push('/register')
    }


    navToggler = () => {
        this.setState({
            navToggle: !this.state.navToggle
        })

    }




    render() {


        const Toggle = this.state.navToggle;


        return (

            <nav style={{ height: !Toggle ? '80px' : '300px' }} className="navbar">
                <h1 className="navbar-brand">Blog<em>DOT</em>net  <span className="dot1">. </span><span className="dot2">. </span><span className="dot3">. </span></h1>
                <ul className="navbarUl">
                    <li className="hamburger">
                        <FontAwesomeIcon style={{ color: Toggle ? 'red' : 'darkblue' }} onClick={this.navToggler} className="hamburgerBtn" icon={faCircle} />
                    </li>
                    <li className="navitem">
                        <button onClick={this.goToRegisterPage} type="button" style={{ display: Toggle ? 'inline' : null }} className="NavBtns">Registration</button>
                    </li>
                    <li className="navitem">
                        <button onClick={this.goToBlogBodyBtn} style={{ display: Toggle ? 'inline' : null }} type="button" className="NavBtns">Blog Main</button>
                    </li>
                </ul>
            </nav>

        )
    }
}
export default withRouter(NavBar);