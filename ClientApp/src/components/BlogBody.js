import React, { Component } from 'react';
import userDefaulfLogo from '../Pic/default-user-image.png';
import Post from './Post';
import '../Styles/blogBody.css';
import axios from 'axios';
import Loader from '../Loader/Loader';






export default class BlogBody extends Component {



    state = {
        posts: [],
        isLoading: true
    }


    async componentDidMount() {
        await axios.get('/api/Post').then(res => {
            this.setState({
                posts: res.data,
                isLoading: false
            })
        })
    }





    render() {

        let Posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                userNickname={post.userNickname}
                postContent={post.postContent}
            />
        })





        return (
            <div className="container blogBody">
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
                                {
                                    this.state.posts.length === 0 ?
                                        <div>
                                            <h1 style={{display: 'inline', backgroundColor: 'lightgrey', borderRadius: '5px'}}>No Posts...</h1>
                                            <small style={{display: 'block', textDecoration: 'underline', marginLeft:'5px'}}>Go To Create Post</small>
                                        </div>
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
