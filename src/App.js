import React, { useState } from "react";
import "./App.css";
import UserBar from "./user/UserBar";
import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";

const defaultPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since Sliced Bread!",
    author: "Justin",
  },
  {
    title: "Using React Fragements",
    content: "Keeping the DOM tree clean!",
    author: "Danile Craig",
  },
];

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState(defaultPosts);
  return (
    <div className='App'>
      <UserBar user={user} setUser={setUser} />
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
