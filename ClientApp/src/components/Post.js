import React, { Component } from 'react';
import '../Styles/Post.css';
import axios from 'axios';
import Comment from './Comment';


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
        commentVal: '',
        singleCommentData: [],
        editCommentMode: false,
        post_id: this.props.postId,
        likes: [],
        like: 0,
        love: 0
    }


    componentDidMount() {
        this.getLikesApi();
    }

    // get likes and love posts API
    getLikesApi = () => {
        axios.get(`/Like/likes/${this.state.post_id}`).then(res => {
            this.setState({
                likes: res.data.data
            })
        }).then(() => {
            this.state.likes.map(like => {
                return this.setState({
                    like: like.like,
                    love: like.love
                })
            })
        })
    }

    // comment list open and get api
    commentList = () => {
        axios.get(`comment/comments/${this.state.post_id}`).then(res => {
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
            commentArea: !this.state.commentArea,
            editCommentMode: false,
            commentVal: ''

        })
    }

    // add a new comment
    addANewComment = () => {
        //interval server error ??????
        axios.post('Comment', { content: this.state.commentVal, post: { Id: this.state.post_id } })
            .then((res) => {
                this.commentList();
                console.log(res)
            }).catch(err => {
                console.log(err);
            })

    }

    //delete a comment
    deleteCommentBtn = (id) => {
        axios.delete(`Comment/${id}`).then(() => {
            axios.get(`comment/comments/${this.state.post_id}`).then(res => {
                this.setState({
                    comment: true,
                    commentArea: false,
                    data: res.data.data

                })
            })
        })
    }

    // edit button get comment value
    editComment = (id) => {
        axios.get(`Comment/${id}`).then(res => {
            this.setState({
                singleCommentData: res.data.data
            })
        }).then(() => {
            this.setState({
                commentVal: this.state.singleCommentData.content,
                editCommentMode: true,
                commentListOpen: false,
                commentArea: true
            })

        })
    }

    // edit Comment Post (put) Comment
    sendEditBtn = (id) => {
        axios.put(`Comment/${id}`, {
            "id": id,
            "content": this.state.commentVal,

        }).then(() => {
            this.commentList();
        }).catch(err => {
            console.log(err);
        })
    }


    render() {


        // comments list
        let comments = this.state.data.map((item, index) => {

            return <Comment class={index % 2 === 0 ? "commentLI" : "commentLI2"}
                Comment={item.content}
                key={item.id}
                postId={this.props.postId}
                editComment={(id) => this.editComment(item.id)}
                deleteCommentBtn={(id) => this.deleteCommentBtn(item.id)} />
        });


        const comment = this.state.comment;
        const commentArea = this.state.commentArea;
        const commentListOpen = this.state.commentListOpen;



        return (
            <li className={(commentArea || commentListOpen) ? "post2" : "post"}>
                <div className="divPostCreator">
                    <small className="PostCreatorUserName">{this.props.userNickname}</small>
                    <button onClick={this.props.deletePostBtn} className="postDelBtn">Delete</button>
                </div>
                <div className="divPostContent">
                    <p className="commentTextarea">{this.props.postContent}</p>
                    {/* small screen comments display none on large screen */}
                    <div className="divCommentsSmallScreen">
                        <p onClick={this.commentList} className="commentsInPost">Comments: placeholder</p>
                        <p>Likes:  {this.state.like}</p>
                        <p>Saved:  {this.state.love}</p>
                    </div>
                </div>
                <div className="divActionBtnsContainer">
                    {/* large screen comments display none on small screen */}
                    <div className="divComments">
                        <p onClick={this.commentList} className="commentsInPost">Comments: placeholder</p>
                        <p>Likes:  {this.state.like}</p>
                        <p>Saved:  {this.state.love}</p>
                    </div>
                    <div className="divActionBtns">
                        <FontAwesomeIcon onClick={this.props.faHeartBtn} className="heartREG" icon={faHeart} />
                        <FontAwesomeIcon style={{ color: comment ? 'black' : 'lightgrey' }} onClick={this.faCommentBtn} className="commentREG" icon={faComment} />
                        <FontAwesomeIcon onClick={this.props.faThumbsUpBtn} className="likeREG" icon={faThumbsUp} />
                    </div>
                </div>
                {
                    commentListOpen ?
                        <div className={commentListOpen ? "divCommentArea" : "divCommentArea2"}>
                            <div className="commentListDiv">
                                <ul className="UlcommentList">
                                    {comments}
                                </ul>
                            </div>
                        </div>
                        :
                        <div className={commentArea ? "divCommentArea" : "divCommentArea2"}>
                            <textarea value={this.state.commentVal} onChange={(e) => this.textareaComments(e)} style={{ resize: 'none' }} className="inputComment" rows="6" cols="50" name="comment" />
                            <div className="commentBtnsPost">
                                <button onClick={this.cancelUploadPostBtn} className="cancelComment">Cancel</button>
                                {
                                    this.state.editCommentMode ?
                                        <button onClick={(id) => this.sendEditBtn(this.state.singleCommentData.id)} className="addComment">Send-Edit</button>
                                        :
                                        <button onClick={this.addANewComment} className="addComment">Comment</button>
                                }
                            </div>
                        </div>
                }
            </li>
        )
    }
}
