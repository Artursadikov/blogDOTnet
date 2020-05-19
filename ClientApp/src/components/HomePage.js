import React, { Component } from 'react';
import { withRouter } from "react-router";
import '../Styles/HomePage.css';

class HomePage extends Component {


    goToLobby = () => {
        this.props.history.push('/blog-lobby')
    }



    render() {
        return (
            <div className="homePage">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Welcome To You'r Blog Home Page</h1>
                        <p className="lead">Choose If You Want To Create A New Post Or Add A Comments.</p>
                        <div className="menuBtnsContainer">
                            <div className="btnCreateContainer">
                                <p className="createBtnContent">Create Post</p>
                                <button style={{ fontSize: '40px' }} className="homePageBtnToPost">+</button>
                            </div>
                            <div className="btnAddCommentContainer">
                                <p className="createBtnContent">Go To Lobby</p>
                                <button onClick={this.goToLobby} className="homePageBtnToPost">Lobby</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}
export default withRouter(HomePage);