import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

export default function ({ title, content, author }) {
  const { secondaryColor } = useContext(ThemeContext);

  return (
    <>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </>
  );
}
