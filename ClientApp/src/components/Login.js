import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import '../Styles/Login.css';

class Login extends Component {

    state = {
        emailVal: '',
        passwordVal: '',
        login: false,
        token: null,
        emptyForm: false
       
    }

    emailHandler = (e) => {
        this.setState({
            emailVal: e.target.value
        })
    }

    passwordHandler = (e) => {
        this.setState({
            passwordVal: e.target.value
        })
    }

    // login btn
    Login = () => {

        let email = this.state.emailVal;
        let pass = this.state.passwordVal;

        if (email === '' || pass === '') {
            this.setState({
                emptyForm: true
            })
        } else {
            axios.post(`Auth/login`, {
                email: this.state.emailVal,
                password: this.state.passwordVal
            }).then((res) => {

                localStorage.setItem("login", JSON.stringify({
                    login: res.data.sucsses,
                    token: res.data.data,
                    userEmail: this.state.emailVal
                }))

                this.setState({
                    login: res.data.sucsses,
                    token: res.data.data
                })


            }).then(() => {

                if (this.state.login === true && this.state.token !== null) {
                    this.props.history.push('/');
                }

            }).catch(err => {
                console.log(err)
            })
        }

    }




    render() {

        let empty = this.state.emptyForm;


        return (
            <div className="container log">
                <h3 className="loginheader">{!empty ? '-Login-' : 'You need to fiil the form '}</h3>
                <div className="row UserLogin">
                    <form>
                        <div className="form-group login">
                            <input value={this.state.emailVal} onChange={(e) => this.emailHandler(e)} type="email" className="form-control" placeholder="Email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group login">
                            <input value={this.state.passwordVal} onChange={(e) => this.passwordHandler(e)} type="password" placeholder="Password" className="form-control" />
                        </div>
                        <div className="formSubmitButton login">
                            <button onClick={this.Login} style={{ display: 'block' }} type="button" className="formSubBtn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)