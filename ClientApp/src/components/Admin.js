import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Admin.css';
import AdmidUserList from './AdmidUserList';



export default class Admin extends Component {

    state = {
        data: [],
        selectUser: false
    }

    getUsersList = () => {
        axios.get(`Auth/AllUsers`).then((res) => {
            this.setState({
                data: res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount() {
        this.getUsersList();
    }

    getUserToDelete = (id) => {

        axios.delete(`Auth/${id}`).then(() => {
            this.getUsersList();
        }).catch(error => {
            console.log(error);
        })

    }

    render() {

        let User = this.state.data.map((user) => {
            return (
                <AdmidUserList
                    key={user.id}
                    nick={user.nickName}
                    email={user.email}
                    id={user.id}
                    getUserToDelete={() => this.getUserToDelete(user.id)}
                    selectUser={this.state.selectUser}
                />
            )
        })

        return (
            <div className="adminContainer">
                <h3 style={{ textAlign: 'center', fontWeight: 'bolder' }}>--Admin Panel--</h3>
                <p style={{ textAlign: 'center', fontWeight: 'bolder' }}>-Click User To Delete-</p>
                <div className="allUsersAdminList_Div">
                    <ul className="allUsersAdminList">
                        {User}
                    </ul>
                </div>
                <button onClick={this.props.closeModal} className="close_adminModalBtn">Close</button>
            </div>
        )
    }
}
