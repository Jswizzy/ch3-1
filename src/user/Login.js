import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../contexts";
import { useResource } from "react-request-hook";

export default function Login() {
  const { dispatch } = useContext(StateContext);

  const [username, setUserName] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [password, setPassword] = useState("");

  // Not secure convert to POST and HTTPS later
  const [user, login] = useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: "get",
  }));

  useEffect(() => {
    if (user && user.data) {
      if (user.data.length > 0) {
        setLoginFailed(false);
        dispatch({ type: "LOGIN", username: user.data[0].username });
      } else {
        setLoginFailed(true);
      }
    }
    if (user && user.error) {
      setLoginFailed(true);
    }
  }, [user]);

  function handleUsername(event) {
    setUserName(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        login(username, password);
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
      <input
        type='password'
        value={password}
        onChange={handlePassword}
        id='login-password'
        name='login-password'
      />
      <input type='submit' value='Login' disabled={username.length === 0} />
      {loginFailed && (
        <span style={{ color: "red" }}>Invalid username or password</span>
      )}
    </form>
  );
}
