import React, { Component } from 'react';
import axios from 'axios'
import '../Styles/Login.css';

export default class Login extends Component {

    state = {
        nickNameVal: '',
        passwordVal: ''

    }

    nickHandler = (e) => {
        this.setState({
            nickNameVal: e.target.value
        })
    }

    passwordHandler = (e) => {
        this.setState({
            passwordVal: e.target.value
        })
    }

    Login = () => {
        axios.post(`Auth/login`, {
            nickName: this.state.nickNameVal,
            password: this.state.passwordVal
        }).then((res) => {
            console.log(res)
           // FIXME: user returns null from backend 
        }).catch(err => {
            console.log(err)
        })
    }


    render() {
        return (
            <div className="container log">
                <h3 className="loginheader">-Login-</h3>
                <div className="row UserLogin">
                    <form>
                        <div className="form-group login">
                            <input value={this.state.nickNameVal} onChange={(e) => this.nickHandler(e)} type="text" className="form-control" placeholder="Nick Name" aria-describedby="emailHelp" />
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
