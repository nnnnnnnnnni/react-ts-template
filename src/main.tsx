import React from "react";
import ReactDom from "React-dom";
import index from "./index.css";

ReactDom.render(
  <div className={index.container}>
    <div className={index.header}>React-template</div>
    <a className={index.author} target='__black' href="https://github.com/nnnnnnnnnni">author: shenger</a>
  </div>,
  document.getElementById("root")
);
