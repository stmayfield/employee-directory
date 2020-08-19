import React from 'react';
import './style.css'
import ProfileImage from '../ProfileImage'

function EmployeeCard(props) {
    return (
        <div className="my-2">
            <div className="card mx-5">
                <div className="card-body p-2">
                    <ProfileImage className="" src={props.src} />
                    <div className="name-field">
                        This is some text.
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EmployeeCard;