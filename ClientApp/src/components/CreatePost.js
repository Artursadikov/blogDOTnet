import React, { Component } from 'react';
import '../Styles/CreatePost.css';
import axios from 'axios';
import { withRouter } from "react-router";

 class CreatePost extends Component {


    state = {
        textareaContentVal: '',
        nickInputVal: '',
        error: ''
    }



    createNewPost = () => {

        axios.post('api/Post', {
            PostContent: this.state.textareaContentVal,
            userNickname: this.state.nickInputVal
        }).then(() => {
            this.setState({
                textareaContentVal: "",
                nickInputVal: ""
            })
        }).then(() => {
            window.confirm("You'r Post Was Created");
        }).then(() => {
            this.props.history.push('/blog-lobby');
        }).catch(error => {
            this.setState({
                error: true
            })
        })
    }



    textareaContent = (e) => {
        this.setState({
            textareaContentVal: e.target.value
        })
    }

    nicknameInput = (e) => {
        this.setState({
            nickInputVal: e.target.value
        })
    }

    clearFilds = () => {

        this.setState({
            textareaContentVal: "",
            nickInputVal: ""
        })

    }


    render() {

        return (
            <div className="container createPost">
                <div className="divtTextarea">

                    {this.state.error ?
                        <h2 style={{ color: 'red' }} className="postCreateHeader">Oops Something Went Wrong...</h2> :
                        <h2 className="postCreateHeader">Create You'r Post Here...</h2>
                    }

                    <input value={this.state.nickInputVal} onChange={(e) => this.nicknameInput(e)} type="text" className="nickInput" placeholder="Enter You'r Nickname" />
                    <textarea value={this.state.textareaContentVal} onChange={(e) => this.textareaContent(e)} style={{ resize: 'none' }} className="createPostTextare" rows="10" cols="40" name="comment" />
                    <div className="createPostBtns">
                        <button onClick={this.clearFilds} className="Clear">Clear</button>
                        {
                            (this.state.nickInputVal && this.state.textareaContentVal) === '' ?
                                <button style={{ opacity: '0.5' }} disabled onClick={this.createNewPost} className="Post">Disabled</button>
                                :
                                <button onClick={this.createNewPost} className="Post">Post</button>
                        }

                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(CreatePost);