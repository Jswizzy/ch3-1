import React, { useState, useContext } from "react";
import { StateContext } from "../contexts";

export default function Login() {
  const { dispatch } = useContext(StateContext);
  const [username, setUserName] = useState("");

  function handleUsername(event) {
    setUserName(event.target.value);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "LOGIN", username });
      }}
    >
      <label htmlFor='login-username'>Username:</label>
      <input
        type='text'
        value={username}
        onChange={handleUsername}
        id='login-username'
        name='login-username'
      />
      <label htmlFor='login-password'>Password:</label>
      <input type='password' id='login-password' name='login-password' />
      <input type='submit' value='Login' disabled={username.length === 0} />
    </form>
  );
}
