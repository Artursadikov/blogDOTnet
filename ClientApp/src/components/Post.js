import React, { Component } from 'react';
import '../Styles/Post.css';
import axios from 'axios';
import Comment from './Comment';


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
        commentListOpen: false,
        data: [],
        commentVal: ''

    }

    // comment list open and get api
    commentList = () => {
        axios.get("comment/comments").then(res => {
            this.setState({
                commentListOpen: !this.state.commentListOpen,
                comment: true,
                commentArea: false,
                data: res.data.data
            })
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

    //text area value
    textareaComments = (e) => {
        let val = e.target.value;
        this.setState({
            commentVal: val
        })
    }

    // close comment button
    cancelUploadPostBtn = () => {
        this.setState({
            comment: !this.state.comment,
            commentArea: !this.state.commentArea
        })
    }

    // add a new comment
    addANewComment = () => {
        axios.post('Comment', { content: this.state.commentVal }).then(() => {
            this.commentList();
        })
    }

    //delete a comment
    deleteCommentBtn = (e, id) => {
        axios.delete(`Comment/${id}`).then(() => {
            axios.get("comment/comments").then(res => {
                this.setState({
                    comment: true,
                    commentArea: false,
                    data: res.data.data
                })
            })
        })
    }


    render() {

        let comments = this.state.data.map((item) => {
            return <Comment class={item.id % 2 === 0 ? "commentLI" : "commentLI2"}
                Comment={item.content}
                key={item.id}
                deleteCommentBtn={(e, id) => this.deleteCommentBtn(e, item.id)} />
        });

        const comment = this.state.comment;
        const commentArea = this.state.commentArea;
        const commentListOpen = this.state.commentListOpen;

        return (
            <li style={{ height: (commentArea || commentListOpen) ? '550px' : '300px' }} className="post">
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
                            <div className="commentListDiv">
                                <ul className="UlcommentList">
                                    {comments}
                                </ul>
                            </div>
                        </div>
                        :
                        <div style={{ opacity: commentArea ? '1' : '0' }} className="divCommentArea">
                            <textarea value={this.state.commentVal} onChange={(e) => this.textareaComments(e)} style={{ resize: 'none' }} className="inputComment" rows="6" cols="50" name="comment" />
                            <div className="commentBtnsPost">
                                <button onClick={this.cancelUploadPostBtn} className="cancelComment">Cancel</button>
                                <button onClick={this.addANewComment} className="addComment">Comment</button>
                            </div>
                        </div>
                }
            </li>
        )
    }
}
