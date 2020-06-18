import React, { Component } from 'react'

export default class NavBackDrop extends Component {



    render() {
        return (
            this.props.show ?
                <div onClick={this.props.closeBackDrop} className="backDrop">
                    <div onClick={this.props.NotcloseBackDrop} style={{height: '300px', width: '300px', backgroundColor: 'red'}}>
                        <li>sdsd</li>
                        <li>sdsd</li>
                        <li>sdsd</li>
                    </div>
                </div> : null
        )
    }
}
