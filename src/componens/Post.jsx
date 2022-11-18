import React from "react";

const Post = function (props) {
  console.log(props);

    return (
    <div className="post">
        <h1 className="post__title">{props.post.title}</h1>
        <p className="post__info">{props.post.id}</p>
        <p className="post__info">{props.post.body}</p>
        <button type="button" className="post__button">Delete</button>
      </div>
    )

}

export default Post