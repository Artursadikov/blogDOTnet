import React, { Component } from 'react';
import Wrapper from '../hoc/Wrapper';
import NavBackDrop from './NavBackDrop';
import '../Styles/NavBarModal.css';

export default class NavBarModal extends Component {


    render() {
        return (
            <div>
                <Wrapper>
                    <NavBackDrop show={this.props.show} />
                    <div
                        style={{
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }}
                        className="ModalNv">
                            <button onClick={this.props.closeXModalBtn} className="closeNavModalXBtn">X</button>
                        {this.props.children}
                    </div>
                </Wrapper>
            </div>
        )
    }
}
