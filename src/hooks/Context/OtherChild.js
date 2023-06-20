
import {useContext} from "react";
import { GlobalInfo } from './App1';

function OtherChild() {
    const {appColor} = useContext(GlobalInfo);
    console.log("appColor", appColor)

  return (
    <div className="App">
      <h1 style={{color: appColor}}>OtherChild Component</h1>
    </div>
  
  );
}

export default OtherChild;
