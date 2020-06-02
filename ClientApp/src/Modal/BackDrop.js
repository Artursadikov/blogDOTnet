import React from 'react';
import '../Styles/BackDrop.css';

export default function BackDrop(props) {
    return (
        props.show  ? <div className="backDrop"></div> : null 
    )
}
