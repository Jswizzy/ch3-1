import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../contexts";
import { useResource } from "react-request-hook";

export default function Register() {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [user, register] = useResource((user, password) => ({
    url: "users",
    method: "post",
    data: { user, password },
  }));

  useEffect(() => {
    if (user && user.data) {
      dispatch({ type: "REGISTER", username: user.data.username });
    }
  }, [user, dispatch]);

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
        register(username, password);
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
