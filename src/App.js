import React, { useState } from "react";
// import Counter from "./componens/Counter";
// import ClassCounter from "./componens/classCounter";
import "./styles/App.css";
import PostBase from "./componens/Post";
import PostList from "./componens/PostList";


function App() {
  const [posts, setPosts] = useState(
    [
      { id: 1, title: "firstEL", body: "content about firstEL" },
      { id: 2, title: "secondEL", body: "content about firstEL" },
      { id: 3, title: "thirdEL", body: "content about firstEL" },
      { id: 4, title: "firstEL", body: "content about firstEL" },
      { id: 5, title: "secondEL", body: "content about firstEL" },
      { id: 6, title: "thirdEL", body: "content about firstEL" }
    ]
  )


   
  return (
    <div className="App">
      <PostList newPost={posts} title="The best post List" />
       
        
      
    </div>
  );
}

export default App;
