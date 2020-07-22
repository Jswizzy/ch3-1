import React, { useState } from "react";

export default function Login({ dispatch }) {
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
