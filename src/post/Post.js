import React from "react";

export default function({ title, content, author }) {
  return (
    <>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </>
  );
}
