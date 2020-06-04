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
        textareaValue: '',
        error: false
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
            userNickname: this.state.inputValue
        }).then(() => {
            this.setState({
                inputValue: '',
                textareaValue: '',
                showModal: false
            })
        }).then(() => {
            this.getApi();
        })
            .catch(e => {
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


    //heart btn // save btn
    faHeartBtn = (e, id, name, postContent, saved, likes, pressedSD, pressedLK) => {

        let icon = e.target.closest('svg');

        axios.put(`api/post/${id}`, {
            "id": id,
            "postContent": postContent,
            "userNickname": name,
            "likes": likes,
            "saved": pressedSD === false ? saved + 1 : saved - 1,
            "pressedLK": pressedLK,
            "pressedSD": pressedSD = !pressedSD
        }).then(() => {

            if (pressedSD === true) {
                icon.style = "color: red"
            } else if (pressedSD === false) {
                icon.style = "color: black"
            }

        }).then(() => {
            this.getApi();
        })
    }



    //like button
    faThumbsUpBtn = (e, id, name, postContent, saved, likes, pressedLK, pressedSD) => {

        let icon = e.target.closest('svg');


        axios.put(`api/post/${id}`, {
            "id": id,
            "postContent": postContent,
            "userNickname": name,
            "likes": pressedLK === false ? likes + 1 : likes - 1,
            "saved": saved,
            "pressedLK": pressedLK = !pressedLK,
            "pressedSD": pressedSD
        }).then(() => {
            if (pressedLK === true) {
                icon.style = "color: #4257f5"
            } else if (pressedLK === false) {
                icon.style = "color: black"
            }

        }).then(() => {
            this.getApi();
        })
    }

    //delete post button
    deletePostBtn = (id) => {
        axios.delete(`api/Post/${id}`).then(() => {
            this.getApi();
        })
        console.log(id)
    }





    render() {


        let Posts = this.state.posts.map(post => {

            return <Post
                key={post.id}
                userNickname={post.userNickname}
                postContent={post.postContent}
                likes={post.likes}
                saved={post.saved}
                pressedLK={post.pressedLK}
                pressedSD={post.pressedSD}
                deletePostBtn={() => this.deletePostBtn(post.id)}
                faHeartBtn={(e) => this.faHeartBtn(e, post.id, post.userNickname, post.postContent, post.saved, post.likes, post.pressedSD)}
                faThumbsUpBtn={(e) => this.faThumbsUpBtn(e, post.id, post.userNickname, post.postContent, post.saved, post.likes, post.pressedLK)}
            />
        })





        return (
            <div className="container blogBody">
                <Modal show={this.state.showModal}>
                    <NewPostCreateModal
                        cancelPostbtn={this.cancelPostbtn}
                        onChengeinputNickVal={(e) => this.inputNickVal(e)}
                        onChengetextareaVal={(e) => this.textareaVal(e)}
                        inputValue={this.state.inputValue}
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
