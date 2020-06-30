import React, { Component } from 'react'
import '../Styles/Admin.css';




export default class Admin extends Component {
    render() {
        return (
            <div className="adminContainer">
                <h3 style={{textAlign: 'center', fontWeight: 'bolder'}}>Admin Panel</h3>
                <div className="allUsersAdminList_Div">
                    <ul className="allUsersAdminList">
                        users
                    </ul>
                    <button className="del_userBtn">Delete User</button>
                </div>
                <button className="close_adminModalBtn">Close</button>
            </div>
        )
    }
}
