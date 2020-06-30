import React from 'react';
import Wrapper from '../hoc/Wrapper';
import '../Styles/ModalAdmin.css';
import BackDrop from './BackDrop';

export default function AdminModal(props) {
    return (
        <Wrapper>
            <BackDrop show={props.showAdminModal}/>
            <div
                style={{

                    transform: props.showAdminModal ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.showAdminModal ? '1' : '0'
                }}
                className="ModalAdmin">
                {props.children}
            </div>
        </Wrapper>

    )
}