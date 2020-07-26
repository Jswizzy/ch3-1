import React, { useReducer, useEffect, useState } from "react";
import "./App.css";
import UserBar from "./user/UserBar";
import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";
import appReducer from "./reducer";
import Header from "./Header";
import { ThemeContext, StateContext } from "./contexts";
import ChangeTheme from "./ChangeTheme";
import { useResource } from "react-request-hook";

function App() {
  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: [],
    error: "",
  });
  const { user, error } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = "React Hooks Blog";
    }
  }, [user]);

  const [posts, getPosts] = useResource(() => ({
    url: "/posts",
    method: "get",
  }));

  useEffect(getPosts, []);

  useEffect(() => {
    if (posts && posts.error) {
      dispatch({ type: "POSTS_ERROR" });
    }
    if (posts && posts.data) {
      dispatch({ type: "FETCH_POSTS", posts: posts.data.reverse() });
    }
  }, [posts]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div className='App'>
          <Header text='React Hooks Blog' />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <br />
          <UserBar />
          <br />
          {user && <CreatePost />}
          <br />
          <hr />
          {error && <b>{error}</b>}
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
