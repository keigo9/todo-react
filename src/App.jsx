import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [imcompleteTodos, setIncompleteTodos] = useState(["aaaaa", "iiiiii"]);
  const [completeTodos, setCompleteTodos] = useState(["uuuuuu"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div>{todo}</div>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div>{todo}</div>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};
