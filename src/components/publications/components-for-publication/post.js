import React from 'react';
import './post.css';
import '../../../reset.css';
import PostAnotherPosibilites from './posibility/posibility.js'
import sendedIcon from '../../../assets/img/posibility-icons/tick.svg'
function Post(prop) {
  return (
    <div className="post">
      <div className="author-inf">
        <img className="avatar" alt="avatar" src={prop.author.photo}/>
        <span className="inf">
          <p className="name">{prop.author.name}</p>
          <img className="sended-icon" src={sendedIcon} alt="sended"/>
          <p>{prop.author.nickname}</p>
          <p className="saparated">|</p>
          <p>{prop.date}</p>
        </span>
      </div>
      <div className="between-line"></div>
      <div>
        <div className="main-content">
          <p>{prop.content}</p>
          <img className="photo" src={prop.image} alt="content"/>  
        </div>
      </div>
      <PostAnotherPosibilites/>
    </div>
  )
}
export default Post