import React, { Component } from 'react';
import userDefaulfLogo from '../Pic/default-user-image.png';
import Post from './Post';
import '../Styles/blogBody.css';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import NewPostCreateModal from './NewPostCreateModal';






export default class BlogBody extends Component {


    state = {
        posts: [],
        isLoading: true,
        showModal: false,
        inputValue: '',
        inputValueHeader: '',
        textareaValue: '',
        error: false,
        dateTime: new Date()

    }


    getApi = () => {
        axios.get('/api/Post').then(res => {

            this.setState({
                posts: res.data.data,
                isLoading: false

            })
        })
    }



    //Open modal create new post
    CreateANewPostBtn = () => {
        this.setState({
            showModal: true
        })
    }

    //close new post modal
    cancelPostbtn = () => {
        this.setState({
            showModal: false
        })
    }


    //input value handler
    inputNickVal = (e) => {
        let val = e.target.value;
        this.setState({
            inputValue: val
        })
    }
    //input value handler
    inputHeader = (e) => {
        let val = e.target.value;
        this.setState({
            inputValueHeader: val
        })
    }

    //textarea value handler
    textareaVal = (e) => {
        let val = e.target.value;
        this.setState({
            textareaValue: val
        })
    }


    //post a new post
    post = () => {

        axios.post('api/Post', {
            postContent: this.state.textareaValue,
            userNickname: this.state.inputValue,
            date: this.state.dateTime,
            header: this.state.inputValueHeader
        }).then(() => {
            this.setState({
                inputValue: '',
                textareaValue: '',
                inputValueHeader: '',
                showModal: false
            })
        }).then(() => {
            this.getApi();
        })
            .catch(e => {
                // error to UI
                this.setState({
                    error: true
                })
                //console log error from server
                console.log(e);
            })


          
    }


    async componentDidMount() {
        await this.getApi();

    }



    //delete post button
    deletePostBtn = (id) => {
        axios.delete(`api/Post/${id}`).then(() => {
            this.getApi();
        })

    }





    render() {


        let Posts = this.state.posts.map(post => {

            return <Post
                key={post.id}
                postId={post.id}
                userNickname={post.userNickname}
                date={post.date}
                header={post.header}
                postContent={post.postContent}
                deletePostBtn={(id) => this.deletePostBtn(post.id)}

            />

        })





        return (
            <div className="container blogBody">
                <Modal show={this.state.showModal}>
                    <NewPostCreateModal
                        cancelPostbtn={this.cancelPostbtn}
                        onChengeinputNickVal={(e) => this.inputNickVal(e)}
                        onChengeinputHeader={(e) => this.inputHeader(e)}
                        onChengetextareaVal={(e) => this.textareaVal(e)}
                        inputValue={this.state.inputValue}
                        inputValueHeader={this.state.inputValueHeader}
                        textareaValue={this.state.textareaValue}
                        post={this.post}
                    />
                </Modal>
                <div className="row blogBody">
                    <div className="blogSideBar col-xs-12 col-sm-5 col-lg-4">
                        <div className="profileArea">
                            <img src={userDefaulfLogo} alt="UserImg" className="row user-pictuar-tag-blog-body" />
                            <h3 className="sideBarUserName">Nickname</h3>
                            <h6 className="sideBarUserEmail">User Email</h6>
                            <div className="profileBtnsEditAndInfo" >
                                <button className="editProfileBtn">Edit</button>
                                <button className="editProfileBtn">My Posts Info</button>
                            </div>
                            <button onClick={this.CreateANewPostBtn} className="createNewPostBtn">Add A New Post</button>
                        </div>
                    </div>
                    <div className="blogMain col-xs-12 col-sm-7 col-lg-8">
                        <div className="blogArea">
                            <ul className="ulPost">
                                {
                                    this.state.isLoading ?
                                        <Loader />
                                        :
                                        null
                                }
                                {Posts}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
