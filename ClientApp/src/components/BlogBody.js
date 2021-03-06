import React, { Component } from 'react';
import userDefaulfLogo from '../Pic/default-user-image.png';
import Post from './Post';
import '../Styles/blogBody.css';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import NewPostCreateModal from './NewPostCreateModal';
import Wrapper from '../hoc/Wrapper';
import AdminModal from '../Modal/AdminModal';
import Admin from './Admin';




export default class BlogBody extends Component {


    state = {
        posts: [],
        isLoading: true,
        showModal: false,
        inputValueHeader: '',
        textareaValue: '',
        error: false,
        likeCount: 0,
        loveCount: 0,
        login: false,
        token: null,
        User_id: null,
        nickName: '',
        email: '',
        editPriofileMode: false,
        editNickInputValue: '',
        showAdminModal: false
    }

    // get the current user
    getUserFromLocalS = () => {
        if (localStorage.getItem("login") !== null) {
            let userCred = JSON.parse(localStorage.getItem("login"));
            this.setState({
                login: userCred.login,
                token: userCred.token
            })

            axios.get(`Auth/${userCred.userEmail}`).then(res => {
                this.setState({
                    User_id: res.data[0].id,
                    nickName: res.data[0].nickName,
                    email: res.data[0].email
                })

            })

        }

    }


    // get all posts
    getApi = () => {
        axios.get('/api/Post').then(res => {

            this.setState({
                posts: res.data.data,
                isLoading: false

            })
        })
    }

    getLikesAndLove = () => {
        axios.get('/api/Post').then(res => {

            this.setState({
                posts: res.data.data,
                isLoading: false

            })
        })
    }

    // open Custom Input
    openCustomInput = () => {
        this.setState({
            openInputTheme: true
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
            showModal: false,
            openInputTheme: false
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
            userNickname: this.state.nickName,
            theme: this.state.inputValueHeader,
            user: { Id: this.state.User_id }
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
        await this.getUserFromLocalS();

    }



    //delete post button
    deletePostBtn = (id) => {
        axios.delete(`api/Post/${id}`).then(() => {
            this.getApi();
        })

    }


    //love button
    faHeartBtn = (id, love, loved, userNick, theme, like, liked, content) => {


        axios.put(`api/Post/${id}`, {
            "id": id,
            "like": like,
            "liked": liked,
            "love": love + 1,
            "loved": loved,
            "userNickname": userNick,
            "theme": theme,
            "postContent": content
        }).then(() => {
            this.getApi();
        })
    }

    //like button
    faThumbsUpBtn = (id, love, loved, userNick, theme, like, liked, content) => {

        axios.put(`api/Post/${id}`, {
            "id": id,
            "like": like + 1,
            "liked": liked,
            "love": love,
            "loved": loved,
            "userNickname": userNick,
            "theme": theme,
            "postContent": content

        }).then(() => {
            this.getApi();
        })

    }

    //edit user profile - nickname // Todo: change pic 
    editPriofile = () => {

        this.setState({
            editPriofileMode: !this.state.editPriofileMode
        })

    }

    // send changes PUT user
    editPriofileChanges = () => {
        axios.put(`Auth/update/${this.state.User_id}`, {
            id: this.state.User_id,
            nickName: this.state.editNickInputValue
        }).then(() => {
            this.getUserFromLocalS();
            this.setState({
                editPriofileMode: !this.state.editPriofileMode
            })
        })

    }

    editNickValHandleChanged = (e) => {
        this.setState({
            editNickInputValue: e.target.value
        })
    }

    // Open admin Modal
    openAdminManager = () => {
        this.setState({
            showAdminModal: !this.state.showAdminModal
        })
      
    }


    render() {


        let Posts = this.state.posts.map(post => {

            return <Post
                key={post.id}
                postId={post.id}
                userNickname={post.userNickname}
                theme={post.theme}
                likeCount={post.like}
                liked={post.liked}
                like={post.like}
                loveCount={post.love}
                love={post.love}
                loved={post.loved}
                postContent={post.postContent}
                deletePostBtn={(id) => this.deletePostBtn(post.id)}
                faHeartBtn={(id, love, loved, userNick, theme, like, liked, content) => this.faHeartBtn(post.id, post.love, post.loved, post.userNickname, post.theme, post.like, post.liked, post.postContent)}
                faThumbsUpBtn={(id, love, loved, userNick, theme, like, liked, content) => this.faThumbsUpBtn(post.id, post.love, post.loved, post.userNickname, post.theme, post.like, post.liked, post.postContent)}
            />

        })





        return (
            <div className="container blogBody">
                <Modal show={this.state.showModal}>
                    <NewPostCreateModal
                        cancelPostbtn={this.cancelPostbtn}
                        userNickName={this.state.nickName}
                        onChengeinputHeader={(e) => this.inputHeader(e)}
                        onChengetextareaVal={(e) => this.textareaVal(e)}
                        inputValueHeader={this.state.inputValueHeader}
                        textareaValue={this.state.textareaValue}
                        post={this.post}
                        sportTheme={() => this.setState({ inputValueHeader: "Sport" })}
                        socialTheme={() => this.setState({ inputValueHeader: "Social" })}
                        newsTheme={() => this.setState({ inputValueHeader: "News" })}
                        politicsTheme={() => this.setState({ inputValueHeader: "Politics" })}
                        themeDisplay={this.state.inputValueHeader}
                    />
                </Modal>
                <div className="row blogBody">
                    <AdminModal showAdminModal={this.state.showAdminModal}>
                        <Admin
                            closeModal={this.openAdminManager}
                        />
                    </AdminModal>
                    <div className="blogSideBar col-xs-12 col-sm-5 col-lg-4">
                        <div className="profileArea">
                            {
                                this.state.editPriofileMode ?
                                    <Wrapper>
                                        <img src={userDefaulfLogo} alt="UserImg" className="row user-pictuar-tag-blog-body" />
                                        <button className="editAvatarBtn">Edit Avatar</button>
                                        <input value={this.state.editNickInputValue} onChange={(e) => this.editNickValHandleChanged(e)} className="editNickInput" placeholder={this.state.nickName} />
                                    </Wrapper> :
                                    <Wrapper>
                                        <img src={userDefaulfLogo} alt="UserImg" className="row user-pictuar-tag-blog-body" />
                                        <h3 className="sideBarUserName">{!this.state.login ? "Anonymous" : this.state.nickName}</h3>
                                        <h6 className="sideBarUserEmail">{!this.state.login ? "Anonymous Mode" : this.state.email}</h6>
                                    </Wrapper>
                            }
                            {
                                this.state.email === "admin@admin" ?
                                    <button onClick={this.openAdminManager} className="AdminEdit">Admin Edit</button> :
                                    null
                            }
                            <div className="profileBtnsEditAndInfo" >
                                {
                                    !this.state.login ? <small style={{ textAlign: "center", color: "red" }}>In Anonymous Mode You Allow Just Read Post & Comment</small> :
                                        <Wrapper>
                                            {
                                                this.state.editPriofileMode ?
                                                    <button onClick={this.editPriofileChanges} className="editProfileBtn">Change</button>
                                                    :
                                                    <button onClick={this.editPriofile} className="editProfileBtn">Edit Profile</button>
                                            }

                                            <button className="editProfileBtn">My Posts</button>
                                        </Wrapper>
                                }

                            </div>
                            <button disabled={!this.state.login ? true : false} onClick={this.CreateANewPostBtn} className="createNewPostBtn">{!this.state.login ? "Login To Post" : "Add A New Post"}</button>
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
