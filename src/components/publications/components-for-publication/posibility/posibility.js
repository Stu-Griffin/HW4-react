import React from "react";
import messageIcon from "../../../../assets/img/posibility-icons/comment.svg";
import repostIcon from "../../../../assets/img/posibility-icons/repost.svg";
import likesIcon from "../../../../assets/img/posibility-icons/likes.svg";
import shareIcon from "../../../../assets/img/posibility-icons/share.svg";
import "./posibility.css";
const actions = [
  {
    count: 482,
    type: "messages",
    img: messageIcon,
  },
  {
    count: 146,
    type: "reposts",
    img: repostIcon,
  },
  {
    count: 887,
    type: "likes",
    img: likesIcon,
  },
  {
    count: 0,
    type: "share",
    img: shareIcon,
  },
];
const PostAnotherPosibilites = (key) => {
  return (
    <div className="another-possibility">
      {actions.map((el, i) => {
          return (
            <span key={i} className="icon-and-his-count">
              <img className="icon" src={el.img} alt={el.type} />
              <p className="amount">{el.count}</p>
            </span>
          )
      })}
    </div>
  );
}
export default PostAnotherPosibilites;
