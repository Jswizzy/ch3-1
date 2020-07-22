import React, { useReducer, useState } from "react";
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

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;

    case "LOGOUT":
      return "";

    default:
      throw new Error();
  }
}

function postsReducer(state, action) {
  switch (action.type) {
    case "CREATE_POST":
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author,
      };
      return [newPost, ...state];

    default:
      throw new Error();
  }
}

function App() {
  const [user, dispatchUser] = useReducer(userReducer, "");
  const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts);

  return (
    <div className='App'>
      <UserBar user={user} dispatch={dispatchUser} />
      <br />
      {user && (
        <CreatePost user={user} posts={posts} dispatch={dispatchPosts} />
      )}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
