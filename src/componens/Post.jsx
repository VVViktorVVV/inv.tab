import React from "react";
import MyButton from "./button/Button";

const PostBase = function (props) {
  console.log(props);

    return (
      <div className="post">
        <p className="post__info">{props.number}</p>
        <h1 className="post__title">{props.xxx.title}</h1>
        
        <p className="post__info">{props.xxx.body}</p>
        <MyButton onClick={()=> props.remove(props.xxx)} type="button" className="post__button">Delete</MyButton>
      </div>
    )

}

export default PostBase