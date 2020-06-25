import React, { Component } from 'react';
import userDefaulfLogo from '../Pic/default-user-image.png';
import { withRouter } from "react-router";
import axios from 'axios';
import '../Styles/Signup.css';

class Signup extends Component {


    state = {

        emailVal: '',
        passwordVal: '',
        nicknameVal: '',
        error: false

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
            
            //TODO: add login after register
            if (res.data.sucsses === true) {
                this.props.history.push('/');
            }

            console.log(res)
        }).catch(err => {
            this.setState({
                error: true

            })

        })
    }



    render() {

        let email = this.state.emailVal;
        let pass = this.state.passwordVal;
        let nick = this.state.nicknameVal;

        return (

            <div className="container login">
                {
                    this.state.error ?
                        <h3 style={{ textAlign: 'center', color: 'red' }}>This Email is Already Exist</h3>
                        :
                        <img src={userDefaulfLogo} alt="UserImg" className="row user-pictuar-tag" />
                }

                <div className="row formUserLogin">
                    <form>
                        <div className="form-group">
                            <input value={nick} onChange={(e) => this.nickNameHandler(e)} type="text" placeholder="Nickname" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input value={email} onChange={(e) => this.emailHandler(e)} type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input value={pass} onChange={(e) => this.passwordHandler(e)} type="password" placeholder="Password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <small >(Optional) upload photo</small>
                            <input type="file" className="form-control-file" />
                        </div>
                        <div className="formSubmitButton">
                            <button disabled={email === '' || pass === '' || nick === "" ? true : false} onClick={this.SubmitRegistration} style={{ display: 'block' }} type="button" className="formSubBtn">{email === '' || pass === '' || nick === "" ? "Fill the form" : "Submit"}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup);
