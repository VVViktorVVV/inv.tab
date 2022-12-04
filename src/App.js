import React, { useState, useMemo } from "react";
import "./styles/App.css";
import PostList from "./componens/PostList";
import PostForm from "./componens/PostForm";
import MySelect from "./componens/select/Select";
import MyInput from "./componens/input/Input";


function App() {
  const [posts, setPosts] = useState(
    [
      { id: 1, title: "zzz", body: "bbb" },
      { id: 2, title: "bbb", body: "ccc" },
      { id: 3, title: "www", body: "aaa" }
    ]
  );

  const [selectedSort, setSelectedSort] = useState();
  const [searchQuery, setSearchQuery] = useState()


  
  
  const getSortedPosts = function () {
    console.log("Работает функция сортедпост");
    if (selectedSort) {
      return [...posts].sort((firstEL, secondEL) => firstEL[selectedSort].localeCompare(secondEL[selectedSort]));
    } 
    return posts;
  }

  const sortedPosts = useMemo(getSortedPosts, [selectedSort, posts]);
  console.log(sortedPosts);

  const sortedAndSearchPosts = useMemo(() => {
    if (searchQuery) {
      return sortedPosts.filter(post => post.title.includes(searchQuery)||post.body.includes(searchQuery));
    };
    return sortedPosts;
        }, [searchQuery, sortedPosts]
  )

  

  const creatPost = function (newPost) {
   
    setPosts([...posts, newPost])
  };

  const removePost = function (e) {
    setPosts(posts.filter(post => post.id !== e.id))
  };

  const sortPost = function (sort) {
    setSelectedSort(sort);
  }

   
  return (
    <div className="App">
      <PostForm create={creatPost} />
      <MyInput
        placeholder="search"

        // управляемый инпут
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value) }
      />
      
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
       : <PostList removeElement={removePost} newPost={sortedAndSearchPosts} title="The best post List" />}
      
      
    </div>
  );
}

export default App;
