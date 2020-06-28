import React, { Component } from 'react';
import { withRouter } from "react-router";
// import { faCircle } from '@fortawesome/free-regular-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../Styles/NavBar.css';
import NavBackDrop from '../Modal/NavBackDrop';
import NavBarModal from '../Modal/NavBarModal';
import NavModalContent from './NavModalContent';

class NavBar extends Component {


    state = {
        navToggle: false,
        show: false,
        // login: false,
        // token: null,
    }


            // // get the current user
            // getUserFromLocalS = () => {
            //     if (localStorage.getItem("login") !== null) {
            //         let userCred = JSON.parse(localStorage.getItem("login"));
            //         this.setState({
            //             login: userCred.login,
            //             token: userCred.token
            //         })

            //     }
     
            // }



    closeBackDrop = () => {
        this.setState({
            show: false
        })
    }
    openNavModal = () => {
        this.setState({
            show: true
        })

    }

    goToBlogBodyBtn = () => {
        this.setState({
            show: false
        })
        this.props.history.push('/')
    }


    goToRegisterPage = () => {
        this.setState({
            show: false
        })
        this.props.history.push('/register')
    }


    navToggler = () => {
        this.setState({
            navToggle: !this.state.navToggle
        })

    }


// componentWillMount(){
//     this.getUserFromLocalS();

// }

    render() {


        const Toggle = this.state.navToggle;


        return (

            <nav style={{ height: !Toggle ? '80px' : '300px' }} className="navbar">
                <h1 className="navbar-brand">Blog<em>DOT</em>net  <span className="dot1">. </span><span className="dot2">. </span><span className="dot3">. </span></h1>
                <div onClick={this.openNavModal} className="navBtnWrapperDiv">
                    <div className="BtnWrapperDiv">
                        <div className="top"></div>
                        <div className="center"></div>
                        <div className="bottom"></div>
                    </div>

                </div>

                <NavBarModal
                    show={this.state.show}
                    closeXModalBtn={this.closeBackDrop}
                >
                    <NavModalContent
                        goToBlogBodyBtn={this.goToBlogBodyBtn}
                        goToRegisterPage={this.goToRegisterPage}
                    />
                </NavBarModal>


                <NavBackDrop
                    show={this.state.show}
                    closeBackDrop={this.closeBackDrop}
                />
            </nav>

        )
    }
}
export default withRouter(NavBar);