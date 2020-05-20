import React, { Component } from 'react';
import userDefaulfLogo from '../Pic/default-user-image.png';

import '../Styles/Signup.css';

export default class Signup extends Component {
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
                            <input type="text" placeholder="Nickname" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" />
                        </div>
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
