import React, { Component } from 'react'
import '../Styles/Admin.css';
export default class AdmidUserList extends Component {




    render() {


        return (
            <li onClick={this.props.getUserToDelete} className="userListAdminLI">
                <span style={{ color: "black", fontWeight: "bolder", fontSize: '12px' }}>-{this.props.id}-</span> <span style={{color: "orange", fontSize: '12px'}}><em>-{this.props.email}-</em></span> <span style={{color:"orangered", fontSize: '12px'}}>-{this.props.nick}</span>
            </li>
        )
    }
}
