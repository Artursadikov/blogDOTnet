import React, { Component } from 'react';
import '../Styles/Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="container log">
                <h3 className="loginheader">-Login-</h3>
                <div className="row UserLogin">
                    <form>
                        <div className="form-group login">
                            <input type="email" className="form-control" placeholder="Email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group login">
                            <input type="password" placeholder="Password" className="form-control" />
                        </div>
                        <div className="formSubmitButton login">
                            <button style={{ display: 'block' }} type="button" className="formSubBtn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
