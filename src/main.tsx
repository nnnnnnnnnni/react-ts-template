import React from "react";
import ReactDom from "React-dom";
import index from "./index.css";

ReactDom.render(
  <div className={index.container}>
    <div className={index.header}>react-template</div>
    <div className={index.link}>
      <a className={index.author} target="__black" href="https://weibo.com/u/5462337214">
        <img src='../public/github.png' alt=""/>
        一个男孩子-</a>
      <a className={index.author} target="__black" href="https://github.com/nnnnnnnnnni">
        <img src='../public/weibo.png' alt=""/>
        shenger
      </a>
    </div>
  </div>,
  document.getElementById("root")
);
