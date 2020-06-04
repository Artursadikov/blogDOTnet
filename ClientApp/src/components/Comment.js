import React, { Component } from 'react';
import '../Styles/Comment.css';

export default class Comment extends Component {
    render() {
        return (
            <div className="LIcommentList">
                <li className={this.props.class}>
                    {this.props.Comment}
                    <div className="btnEditDelDiv">
                        <button className="commentBtnEdit">Edit</button>
                        <button onClick={this.props.deleteCommentBtn} className="commentBtnDelete">Delete</button>
                    </div>
                </li>
            </div>
        )
    }
}
