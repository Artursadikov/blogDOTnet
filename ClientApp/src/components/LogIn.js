import React, { Component } from 'react';
import userDefaulfLogo from '../Pic/default-user-image.png';

import '../Styles/Login.css';

export default class LogIn extends Component {
    render() {
        return (
            <div className="container login">
                <img src={userDefaulfLogo} alt="UserImg" className="row user-pictuar-tag" />
                <div className="row formUserLogin">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="First Name" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Last Name" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" />
                        </div>
                        <select className="form-control form-control-sm">
                            <option>Male</option>
                            <option>Female</option>
                            <option>None</option>
                        </select>
                        <div className="form-group">
                            <small >(Optional) upload photo</small>
                            <input type="file" className="form-control-file" />
                        </div>
                        <div className="formSubmitButton">
                            <button style={{ display: 'block' }} type="button" className="formSubBtn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
