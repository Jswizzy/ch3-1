import React, { useReducer, useEffect } from "react";
import "./App.css";
import UserBar from "./user/UserBar";
import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";
import appReducer from "./reducer";

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
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: defaultPosts,
  });
  const { user, posts } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = "React Hooks Blog";
    }
  }, [user]);

  return (
    <div className='App'>
      <UserBar user={user} dispatch={dispatch} />
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
