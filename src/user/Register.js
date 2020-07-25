import React, { useState, useContext } from "react";
import { StateContext } from "../contexts";

export default function Register() {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handlePasswordRepeat(event) {
    setPasswordRepeat(event.target.value);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "REGISTER", username });
      }}
    >
      <label htmlFor='register-username'>Username:</label>
      <input
        type='text'
        value={username}
        onChange={handleUsername}
        id='register-username'
        name='register-username'
      />
      <label htmlFor='register-password'>Password:</label>
      <input
        type='password'
        value={password}
        onChange={handlePassword}
        id='register-password'
        name='register-password'
      />
      <label htmlFor='register-password-repeat'>Repeat Password:</label>
      <input
        type='password'
        value={passwordRepeat}
        onChange={handlePasswordRepeat}
        id='register-password-repeat'
        name='register-password-repeat'
      />
      <input
        type='submit'
        value='Register'
        disabled={
          username.length === 0 ||
          password.length === 0 ||
          password !== passwordRepeat
        }
      />
    </form>
  );
}
