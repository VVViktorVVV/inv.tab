import React, { useState } from 'react';
import MyInput from "./input/Input";
import MyButton from "./button/Button";


const PostForm = function ({create}) {
    

    const [post, setPost] = useState({ title: "", body: "" });

    const addNewPost = function (e) {
        e.preventDefault();

        const newPost = {
            ...post,
            id: Date.now()                   
        }

        create(newPost);
        setPost({ title: "", body: "" });
        
    };
    
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Name post"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="About post"
            />
            <MyButton onClick={addNewPost}>Creat post</MyButton>
        </form>
    );
};

export default PostForm;