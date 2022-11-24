import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./componens/PostList";
import PostForm from "./componens/PostForm";
import MySelect from "./componens/select/Select";


function App() {
  const [posts, setPosts] = useState(
    [
      { id: 1, title: "zzz", body: "bbb" },
      { id: 2, title: "bbb", body: "ccc" },
      { id: 3, title: "www", body: "aaa" }
    ]
  );

  const [selectedSort, setSelectedSort] = useState();

  const creatPost = function (newPost) {
   
    setPosts([...posts, newPost])
  };

  const removePost = function (e) {
    setPosts(posts.filter(post => post.id !== e.id))
  };

  const sortPost = function (sort) {
    setSelectedSort(sort);
    console.log(sort)
    setPosts([...posts].sort((firstEL, secondEL) => firstEL[sort].localeCompare(secondEL[sort])));

  }

   
  return (
    <div className="App">
      <PostForm create={creatPost} />
      <MySelect
        value={selectedSort}
        onChange={sortPost}
        defaultValue="Sort"
        options={[
         
          { value: 'title', name: 'On name' },
          { value: 'body', name: 'On body' }
        ]}
      />
      {posts.length === 0
       ? <h1 style={{ textAlign: "center", marginTop: "15px" }}>Not foud posts</h1>
       : <PostList removeElement={removePost} newPost={posts} title="The best post List" />}
      
      
    </div>
  );
}

export default App;
