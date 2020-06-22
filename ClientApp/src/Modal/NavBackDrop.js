import React, { Component } from 'react'

export default class NavBackDrop extends Component {



    render() {
        return (
            this.props.show ?
                <div onClick={this.props.closeBackDrop} className="backDrop">
                </div> : null
        )
    }
}
