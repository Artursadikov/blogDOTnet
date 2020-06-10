import React, { Component } from 'react';
import '../Styles/Register.css';
import Login from './Login';
import Signup from './Signup';

export default class Register extends Component {


    state = {
        registerShow: true,
        loginShow: false
    }


    loginSection = () => {
        this.setState({
            loginShow: !this.state.loginShow,
            registerShow: !this.state.registerShow
        })
    }

    registerSection = () => {
        this.setState({
            registerShow: !this.state.registerShow,
            loginShow: !this.state.loginShow
        })
    }



    render() {




        return (
            <div className="container register">
                <div className="registerHeadre">
                    <div style={{ borderBottom: !this.state.loginShow ? '1px solid darkBlue' : 'none', backgroundColor: !this.state.loginShow ? 'rgba(83, 185, 219, 0.5)' : 'transparent', paddingTop: '5px' }}
                        onClick={this.loginSection} className="loginSection">Login</div>
                    <div style={{ borderBottom: !this.state.registerShow ? '1px solid darkBlue' : 'none', backgroundColor: !this.state.registerShow ? 'rgba(83, 185, 219, 0.5)' : 'transparent', paddingTop: '5px'  }}
                        onClick={this.registerSection} className="registerSection">Register</div>
                </div>
                <div className="registerBody">
                    {
                        this.state.loginShow ? <Login /> : <Signup />
                    }
                </div>
            </div>
        )
    }
}
