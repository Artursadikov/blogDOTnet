import React, { Component } from 'react';
import userDefaulfLogo from '../Pic/default-user-image.png';
import axios from 'axios';
import '../Styles/Signup.css';

export default class Signup extends Component {


    state = {
        
        emailVal: '',
        passwordVal: '',
        nicknameVal: ''
    }

    passwordHandler = (e) => {
        this.setState({
            passwordVal: e.target.value
        })
    }

    emailHandler = (e) => {
        this.setState({
            emailVal: e.target.value
        })
    }

    nickNameHandler = (e) => {
        this.setState({
            nicknameVal: e.target.value
        })
    }

    SubmitRegistration = () => {

        axios.post(`Auth/register`, {
            email: this.state.emailVal,
            password: this.state.passwordVal,
            nickname: this.state.nicknameVal
        }).then((res) => {

            if (res.data.sucsses === true) {
                alert("sucsses")
            } else {
                alert("error")
            }

            console.log(res)
        })
    }



    render() {
        return (
            <div className="container login">
                <img src={userDefaulfLogo} alt="UserImg" className="row user-pictuar-tag" />
                <div className="row formUserLogin">
                    <form>
                        <div className="form-group">
                            <input value={this.state.nicknameVal} onChange={(e) => this.nickNameHandler(e)} type="text" placeholder="Nickname" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input value={this.state.emailVal} onChange={(e) => this.emailHandler(e)} type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input value={this.state.passwordVal} onChange={(e) => this.passwordHandler(e)} type="password" placeholder="Password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <small >(Optional) upload photo</small>
                            <input type="file" className="form-control-file" />
                        </div>
                        <div className="formSubmitButton">
                            <button onClick={this.SubmitRegistration} style={{ display: 'block' }} type="button" className="formSubBtn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
