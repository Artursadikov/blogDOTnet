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
        this.props.history.push('/blog-lobby')
    }


    navToggler = () => {
        this.setState({
            navToggle: !this.state.navToggle
        })

    }



    // componentDidMount() {
    //     window.addEventListener("resize", this.resize());

    // }

    // resize=()=>{

    //     if (window.innerWidth <= 720) {
    //         this.setState({ navToggle: true });
    //     }
    // }

    render() {


        const Toggle = this.state.navToggle;


        return (

            <nav style={{ height: !Toggle ? '80px' : '350px' }} className="navbar">
                <h1 className="navbar-brand">Blog<em>DOT</em>net</h1>
                <ul className="navbarUl">
                    <li className="hamburger">
                        <FontAwesomeIcon style={{color: Toggle ? 'red' : 'darkblue'}} onClick={this.navToggler} className="hamburgerBtn" icon={faCircle} />
                    </li>
                    <li className="navitem">
                        <button type="button" style={{display: Toggle ? 'inline' : null}} className="NavBtns" >Sign-Up</button>
                    </li>
                    <li className="navitem">
                        <button onClick={this.goToBlogBodyBtn} style={{display: Toggle ? 'inline' : null}} type="button" className="NavBtns">Blog Lobby</button>
                    </li>
                    <li className="navitem">
                        <button type="button" style={{display: Toggle ? 'inline' : null}} className="NavBtns">Log-Out</button>
                    </li>
                    <li className="navitem">
                        <button onClick={()=>this.props.history.push('/')} type="button" style={{display: Toggle ? 'inline' : null}} className="NavBtns">Home</button>
                    </li>
                    <li className="navitem">
                        <button type="button" style={{display: Toggle ? 'inline' : null}} className="NavBtns">empty</button>
                    </li>
                </ul>
            </nav>

        )
    }
}
export default withRouter(NavBar);