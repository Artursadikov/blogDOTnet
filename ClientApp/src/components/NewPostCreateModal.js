import React, { Component } from 'react';
import '../Styles/NewPostCreateModal.css';




class NewPostCreateModal extends Component {


    render() {
        return (
            <div className="newPostContainer">
                {
                    this.props.error ? <p className="newPostHeader">Oops Something Went Wrong...</p>
                        : <p className="newPostHeader">Create Your Post</p>
                }

                <input value={this.props.inputValue} onChange={this.props.onChengeinputNickVal} type="text" placeholder="Enter Your Nick-Name" className="createPostInput" />
                <input value={this.props.inputValueHeader} onChange={this.props.onChengeinputHeader} type="text" placeholder="Header" className="createPostInputHeader" />
                <textarea value={this.props.textareaValue} onChange={this.props.onChengetextareaVal} rows="6" cols="40" name="comment" className="createPostTextarea" placeholder="Post..." />
                <div className="createPostBtnDiv">
                    <button onClick={this.props.cancelPostbtn} className="createPostCancelBtn">Cancel</button>
                    {
                        this.props.inputValue === '' || this.props.textareaValue
                         === "" || this.props.inputValueHeader === '' ?
                            <button disabled style={{ opacity: '0.5' }} className="createPostPostBtn">Disabled</button>
                            :
                            <button onClick={this.props.post} className="createPostPostBtn">Post</button>
                    }

                </div>
            </div>
        )
    }
}

export default NewPostCreateModal;
