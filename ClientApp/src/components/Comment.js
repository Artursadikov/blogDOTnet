import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <li className="LIcommentList">
                {this.props.Comment}
            </li>
        )
    }
}
