import React, { useState } from "react";
// import Counter from "./componens/Counter";
// import ClassCounter from "./componens/classCounter";
import "./styles/App.css";
import Post from "./componens/Post";
function App() {
  const [posts, setPost] = useState(
    [
      { id: 1, title: "firstEL", body: "content about firstEL" },
      { id: 1, title: "firstEL", body: "content about firstEL" },
      { id: 1, title: "firstEL", body: "content about firstEL" }
    ]
  )


   
  return (
    <div className="App">
      {/* <Counter />
      <ClassCounter /> */}

      
      <Post post={{ id: 1, title: "firstEL", body: "content about firstEL" }} />

         
      
    </div>
  );
}

export default App;
