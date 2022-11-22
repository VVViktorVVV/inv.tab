
import React from "react";
import PostBase from "./Post";

const PostList = function ({newPost, title}) {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: "15px" }}>
                {title}
            </h1>
        {newPost.map((el, index) => <PostBase number = {index + 1} xxx={el} key={el.id} />
            )}
        </div>
    );
};

export default PostList;