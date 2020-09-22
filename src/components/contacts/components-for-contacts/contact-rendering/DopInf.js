import React from 'react';
const DopInf = (props) => {
    return(
        <div className="dopInf-box">
            <h1>{props.gender}</h1>
            <h1>{props.phone}</h1>
            <p>Hi my name is {props.name}, I am {props.age} years old</p>
            <div className="chat">
                <p>Me: <span className="me">Hi what's up?</span></p>
                <p><span className="answer">Fine, thx. And you?</span></p>
                <p>Me: <span className="me">Also, fine.</span></p>
            </div>
        </div>
    )
}
export default DopInf;