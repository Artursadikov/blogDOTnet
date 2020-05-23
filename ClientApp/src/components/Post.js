import React, { Component } from 'react';
import '../Styles/Post.css';
//import axios from 'axios';

// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





export default class Post extends Component {

    state = {
        comment: true,
        commentArea: false,
        commentListOpen: false
    }

    // comment list open
    commentList = () => {
        this.setState({
            commentListOpen: !this.state.commentListOpen,
            comment: true,
            commentArea: false
        })
    }


    //commment button
    faCommentBtn = () => {
        this.setState({
            comment: !this.state.comment,
            commentArea: !this.state.commentArea,
            commentListOpen: false
        })

    }



    // close comment button
    cancelUploadPostBtn = () => {
        this.setState({
            comment: !this.state.comment,
            commentArea: !this.state.commentArea
        })
    }






    render() {



        const comment = this.state.comment;
        const commentArea = this.state.commentArea;
        const commentListOpen = this.state.commentListOpen;

        return (
            <li style={{ height: (commentArea || commentListOpen) ? '450px' : '300px' }} className="post">
                <div className="divPostCreator">
                    <small className="PostCreatorUserName">{this.props.userNickname}</small>
                </div>
                <div className="divPostContent">
                    <p className="commentTextarea">{this.props.postContent}</p>
                    {/* small screen comments display none on large screen */}
                    <div className="divCommentsSmallScreen">
                        <p onClick={this.commentList} className="commentsInPost">Comments: placeholder</p>
                        <p>Likes: {this.props.likes}</p>
                        <p>Saved:  {this.props.saved}</p>
                    </div>
                </div>
                <div className="divActionBtnsContainer">
                    {/* large screen comments display none on small screen */}
                    <div className="divComments">
                        <p onClick={this.commentList} className="commentsInPost">Comments: placeholder</p>
                        <p>Likes:  {this.props.likes}</p>
                        <p>Saved:  {this.props.saved}</p>
                    </div>
                    <div className="divActionBtns">
                        <FontAwesomeIcon onClick={this.props.faHeartBtn} className="heartREG" icon={faHeart} />
                        <FontAwesomeIcon style={{ color: comment ? 'black' : 'lightgrey' }} onClick={this.faCommentBtn} className="commentREG" icon={faComment} />
                        <FontAwesomeIcon onClick={this.props.faThumbsUpBtn} className="likeREG" icon={faThumbsUp} />
                    </div>
                </div>
                {
                    commentListOpen ?
                        <div style={{ opacity: commentListOpen ? '1' : '0' }} className="divCommentArea">
                            <h1>comments</h1>
                        </div>
                        :
                        <div style={{ opacity: commentArea ? '1' : '0' }} className="divCommentArea">
                            <textarea style={{ resize: 'none' }} className="inputComment" rows="6" cols="50" name="comment" />
                            <div className="commentBtnsPost">
                                <button onClick={this.cancelUploadPostBtn} className="cancelComment">Cancel</button>
                                <button className="addComment">Comment</button>
                            </div>
                        </div>
                }
            </li>
        )
    }
}
