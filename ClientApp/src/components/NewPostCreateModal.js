import React, { Component } from 'react';
import '../Styles/NewPostCreateModal.css';





class NewPostCreateModal extends Component {

    state = {
        openInputTheme: false
    }


    // open Custom Input
    openCustomInput = () => {
        this.setState({
            openInputTheme: true
        })
    }

    cancelPostbtn = () => {
        this.setState({
            openInputTheme: false
        })
    }


    render() {
        return (
            <div className="newPostContainer">
                {
                    this.props.error ? <p className="newPostHeader">Oops Something Went Wrong...</p>
                        : <h1 className="newPostHeader">--Create Your Post--</h1>
                }

                <h2 style={{ textAlign: 'center', fontWeight: "bolder" }}>{this.props.userNickName}</h2>
                {
                    !this.state.openInputTheme ?
                        <div className="themeBtnsDiv">
                            <button onClick={this.props.sportTheme} className="themeBtn sport">Sport</button>
                            <button onClick={this.props.socialTheme} className="themeBtn social">Social</button>
                            <button onClick={this.props.newsTheme} className="themeBtn news">News</button>
                            <button onClick={this.props.politicsTheme} className="themeBtn politics">Politics</button>
                            <button onClick={this.openCustomInput} className="themeBtn custom" >Custom</button>
                        </div>
                        :
                        <input value={this.props.inputValueHeader} onChange={this.props.onChengeinputHeader} type="text" placeholder="Post Theme" className="createPostInputHeader" />


                }

                <textarea value={this.props.textareaValue} onChange={this.props.onChengetextareaVal} rows="6" cols="40" name="comment" className="createPostTextarea" placeholder="You`r Story..." />
                <div className="createPostBtnDiv">
                    {
                        !this.state.openInputTheme ?
                            <button onClick={this.props.cancelPostbtn} className="createPostCancelBtn">Cancel</button>
                            :
                            <button onClick={this.cancelPostbtn} className="createPostCancelBtn">Back</button>
                    }

                    {
                         this.props.textareaValue
                            === "" || this.props.inputValueHeader === '' ?
                            <button disabled style={{ opacity: '0.5' }} className="createPostPostBtn">Disabled</button>
                            :
                            <button onClick={this.props.post} className="createPostPostBtn">Post</button>
                    }

                </div>
                {!this.state.openInputTheme ?
                    <h1 className="themeDisplay">{this.props.themeDisplay}</h1>
                    :
                    null
                }

            </div>
        )
    }
}

export default NewPostCreateModal;
