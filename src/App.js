import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./componens/PostList";
import PostForm from "./componens/PostForm";


function App() {
  const [posts, setPosts] = useState(
    [
      { id: 1, title: "firstEL", body: "content about firstEL" },
      { id: 2, title: "secondEL", body: "content about firstEL" }
    ]
  );

  const creatPost = function (newPost) {
   
    setPosts([...posts, newPost])
  };

  // const removePost = function (post) {
  //   setPosts
  // }

   
  return (
    <div className="App">
      <PostForm create={creatPost} />
      <PostList newPost={posts} title="The best post List" />
         
    </div>
  );
}

export default App;
