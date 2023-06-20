import "./App.css";
import { useState } from "react";
import State from "./hooks/State";
import Effect from "./hooks/Effect";
import Memo from "./hooks/Memo";
import Callback from "./hooks/Callback/Callback";
import Reducer from "./hooks/Reducer";
import Ref from "./hooks/Ref";
import App1 from "./hooks/Context/App1";
// import Custom from "./hooks/useCustom";
import Custom from "./hooks/Custom";
import Pagination from "./Pagination/Pagination";

function App() {
  return (
    <div className="App">
      <h1>Pagination & Hooks in React</h1>
      {/* HOOKS IN REACT */}
      {/* <State/> */}
      {/* <Effect/> */}
      {/* <Memo/> */}
      {/* <Callback/> */}
      {/* <Reducer/> */}
      {/* <Ref/> */}
      {/* <App1/> */}
      {/* <Custom/> */}
      <Pagination />
    </div>
  );
}

export default App;
