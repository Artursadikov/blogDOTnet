import React, { Component } from 'react';
import '../Styles/Post.css';

// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





export default class Post extends Component {

    state = {
        heart: true,
        like: true,
        comment: true,
        commentArea: false
    }



    faHeartBtn = () => {

        this.setState({
            heart: !this.state.heart
        })

    }

    faCommentBtn = () => {
        this.setState({
            comment: !this.state.comment,
            commentArea: !this.state.commentArea
        })

    }

    faThumbsUpBtn = () => {
        this.setState({
            like: !this.state.like
        })
    }

    cancelUploadPostBtn = () => {
        this.setState({
            comment: !this.state.comment,
            commentArea: !this.state.commentArea
        })
    }





    render() {


        const heart = this.state.heart;
        const like = this.state.like;
        const comment = this.state.comment;
        const commentArea = this.state.commentArea;


        return (
            <li style={{ height: commentArea ? '450px' : '300px' }} className="post">
                <div className="divPostCreator">
                    <small className="PostCreatorUserName">Nickname</small>
                </div>
                <div className="divPostContent">
                    <p className="commentTextarea">Post...</p>
                    {/* small screen comments display none on large screen */}
                    <div className="divCommentsSmallScreen">
                        <p>Comments: 12</p>
                        <p>Likes: 235</p>
                        <p>Saved: 25</p>
                    </div>
                </div>
                <div className="divActionBtnsContainer">
                    {/* large screen comments display none on small screen */}
                    <div className="divComments">
                        <p>Comments: 12</p>
                        <p>Likes: 235</p>
                        <p>Saved: 25</p>
                    </div>
                    <div className="divActionBtns">
                        <FontAwesomeIcon style={{ color: heart ? 'black' : 'red' }} onClick={this.faHeartBtn} className="heartREG" icon={faHeart} />
                        <FontAwesomeIcon style={{ color: comment ? 'black' : 'lightgrey' }} onClick={this.faCommentBtn} className="commentREG" icon={faComment} />
                        <FontAwesomeIcon style={{ color: like ? 'black' : 'rgb(71, 71, 192)' }} onClick={this.faThumbsUpBtn} className="likeREG" icon={faThumbsUp} />
                    </div>
                </div>
                <div style={{ opacity: commentArea ? '1' : '0' }} className="divCommentArea">
                    <textarea style={{resize: 'none'}} className="inputComment" rows="6" cols="50" name="comment" />
                        <div className="commentBtnsPost">
                            <button onClick={this.cancelUploadPostBtn} className="cancelComment">Cancel</button>
                            <button className="addComment">Comment</button>
                        </div>
                </div>
            </li>
        )
    }
}
