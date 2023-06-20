
import {useContext} from "react";
import { GlobalInfo } from './App1';

function SuperChild() {
    const {appColor, getDay} = useContext(GlobalInfo);
    console.log("appColor", appColor)
    const day = "Sunday";

  return (
    <div className="App">
      <h1 style={{color: appColor}}>SuperChild Component</h1>
      <button onClick={()=>getDay(day)}>Click Me</button>
    </div>
  
  );
}

export default SuperChild;

