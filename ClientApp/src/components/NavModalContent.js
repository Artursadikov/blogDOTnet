import React, { Component } from 'react';
import '../Styles/NavModalContent.css';
import { withRouter } from 'react-router-dom';



class NavModalContent extends Component {



    logOut = () => {
        localStorage.clear();
        this.props.history.push('/Register');
    }



    render() {



        return (
            <div className="NavModalContentDiv">
                <button onClick={this.props.goToRegisterPage} className="navBtn">Registration/Login</button>
                <button onClick={this.props.goToBlogBodyBtn} className="navBtn">Blog Main</button>
                <button onClick={this.logOut} className="navBtn logout">Log-Out</button>
            </div>
        )
    }
}
export default withRouter(NavModalContent);