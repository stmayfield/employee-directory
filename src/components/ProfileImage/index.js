import React from 'react';
import './style.css'

function ProfileImage(props) {
    console.log(props)
    return <img className="profile-image" src={props.src} alt="placeholder image"></img>
};

export default ProfileImage;