import React, { Component } from 'react';
import userDefaulfLogo from '../Pic/default-user-image.png';
import Post from './Post';
import '../Styles/blogBody.css';
import axios from 'axios';
import Loader from '../Loader/Loader';






export default class BlogBody extends Component {


    state = {
        posts: [],
        isLoading: true,

    }


    getApi = () => {
        axios.get('/api/Post/getall').then(res => {
         
            this.setState({
                posts: res.data.data,
                isLoading: false

            })
          
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







    render() {


        let Posts = this.state.posts.map(post => {
            const { id } = post;
            return <Post
                key={post.id}
                userNickname={post.userNickname}
                postContent={post.postContent}
                likes={post.likes}
                saved={post.saved}
                pressedLK={post.pressedLK}
                pressedSD={post.pressedSD}
                faHeartBtn={(e) => this.faHeartBtn(e, id, post.userNickname, post.postContent, post.saved, post.likes, post.pressedSD)}
                faThumbsUpBtn={(e) => this.faThumbsUpBtn(e, id, post.userNickname, post.postContent, post.saved, post.likes, post.pressedLK)}
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
                                            <h1 style={{ display: 'inline', backgroundColor: 'lightgrey', borderRadius: '5px' }}>No Posts...</h1>
                                            <small style={{ display: 'block', textDecoration: 'underline', marginLeft: '5px' }}>Go To Create Post</small>
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
