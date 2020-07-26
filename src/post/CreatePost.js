import React, { useState, useContext } from "react";
import { StateContext } from "../contexts";
import { useResource } from "react-request-hook";

export default function CreatePost() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [, createPost] = useResource(({ title, content, author }) => ({
    url: "/posts",
    method: "post",
  }));

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleContent(event) {
    setContent(event.target.value);
  }

  function handleCreate() {
    createPost({ title, content, author: user });
    dispatch({ type: "CREATE_POST", title, content, author: user });
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <p>
        Author: <b>{user}</b>
      </p>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input
          type='text'
          value={title}
          onChange={handleTitle}
          id='create-title'
          name='create-title'
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type='submit' value='Create' />
    </form>
  );
}
