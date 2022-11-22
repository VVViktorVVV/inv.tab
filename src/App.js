import React, { useState } from "react";
// import Counter from "./componens/Counter";
// import ClassCounter from "./componens/classCounter";
import "./styles/App.css";
// import PostBase from "./componens/Post";
import PostList from "./componens/PostList";
import MyButton from "./componens/button/Button";
import MyInput from "./componens/input/Input";


function App() {
  const [posts, setPosts] = useState(
    [
      { id: 1, title: "firstEL", body: "content about firstEL" },
      { id: 2, title: "secondEL", body: "content about firstEL" }
      // { id: 3, title: "thirdEL", body: "content about firstEL" },
      // { id: 4, title: "firstEL", body: "content about firstEL" },
      // { id: 5, title: "secondEL", body: "content about firstEL" },
      // { id: 6, title: "thirdEL", body: "content about firstEL" }
    ]
  );

  const [title, setTitle] = useState();
  const [body, setBody] = useState(); 

  const addNewPost = function (e) {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body
    };

    setPosts ([...posts, newPost])
    
    console.log(body);
  }


   
  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Name post"
        />
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder="About post"
        />
        <MyButton onClick={addNewPost}>Creat post</MyButton>
      </form>
      <PostList newPost={posts} title="The best post List" />
         
    </div>
  );
}

export default App;
