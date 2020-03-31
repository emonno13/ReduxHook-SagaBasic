import React from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.age);
  const love = useSelector((state) => state.love);

  return (
    <div className="App">
      <div className="Age-label">
        your love:
        <p style={{ color: love === true ? "red" : "black" }}>HEART</p>
        your age: <span>{number}</span>
      </div>
      <button onClick={() => dispatch({ type: "UP", value: 1 })}>Up</button>
      <button onClick={() => dispatch({ type: "DOWN", value: 1 })}>Down</button>
      <button onClick={() => dispatch({ type: "UP_ASYNC" })}>Up Async</button>
      <button onClick={() => dispatch({ type: "DOWN_ASYNC" })}>
        Down Async
      </button>
      <button onClick={() => dispatch({ type: "UP_DOWN_ASYNC" })}>
        UP 3 & DOWN 1
      </button>
      <button
        onClick={() => dispatch({ type: "CHANGE_YOUR_LOVE", value: !love })}
      >
        Change your love
      </button>
    </div>
  );
};

export default App;
