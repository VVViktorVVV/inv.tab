import React from "react";

const PostBase = function (props) {
  console.log(props);

    return (
      <div className="post">
        <p className="post__info">{props.number}</p>
        <h1 className="post__title">{props.xxx.title}</h1>
        
        <p className="post__info">{props.xxx.body}</p>
        <button type="button" className="post__button">Delete</button>
      </div>
    )

}

export default PostBase