import React, { Component } from 'react';
import '../Styles/CreatePost.css';

export default class CreatePost extends Component {
    render() {
        return (
            <div className="container createPost">
                <div className="divtTextarea">
                    <h2 className="postCreateHeader">Create You'r Post Here...</h2>
                    <textarea style={{resize: 'none'}} className="createPostTextare" rows="10" cols="40" name="comment" />
                    <div className="createPostBtns">
                        <button className="Clear">Clear</button>
                        <button className="Post">Post</button>
                    </div>
                </div>
            </div>
        )
    }
}
