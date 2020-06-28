import React, { Component } from 'react';
import '../Styles/Comment.css';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Comment extends Component {
    render() {
        return (
            <div className="LIcommentList">
                <li className={this.props.class}>
                    {this.props.Comment}
                    <br /> <FontAwesomeIcon style={{ marginRight: '5px', fontSize: '12px', textAlign: 'center', color: 'orange' }} icon={faUser} /><small style={{ textAlign: 'center' }}>{this.props.userNameCommented}</small>
                    <div className="btnEditDelDiv">
                        <button onClick={this.props.editComment} className="commentBtnEdit">Edit</button>
                        <button onClick={this.props.deleteCommentBtn} className="commentBtnDelete">Delete</button>
                    </div>
                </li>
            </div>
        )
    }
}
