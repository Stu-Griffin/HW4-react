import React from 'react';
import '../component.css';
const Contact = (props) => {
    return (
        <div className="block">
            <div className="left-side">
                <div className="personal-inf">
                    <h4>{props.firstName}</h4>
                    <h4>{props.lastName}</h4>
                </div>
                <h4 className="phone-number">{props.phone}</h4>
            </div>
            <img src={props.gender} className="right-side" alt="gender"/>
        </div>
    )
}
export default Contact