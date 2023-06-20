
import {useContext} from "react";
import { GlobalInfo } from './App1';
import SuperChild from './SuperChild';

function Child() {
    const {appColor} = useContext(GlobalInfo);
    console.log("appColor", appColor)

  return (
    <div className="App">
      <h1 style={{color: appColor}}>Child Component</h1>
      <SuperChild />
    </div>
  
  );
}

export default Child;
