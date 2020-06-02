import React from 'react';
import Wrapper from '../hoc/Wrapper';
import '../Styles/Modal.css';
import BackDrop from './BackDrop';

export default function Modal(props) {
    return (
        <Wrapper>
            <BackDrop show={props.show}/>
            <div
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                className="Modal">
                {props.children}
            </div>
        </Wrapper>

    )
}