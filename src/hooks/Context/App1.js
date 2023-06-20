
import Child from './Child';
import {createContext} from "react";
import { useState } from 'react';
import OtherChild from './OtherChild';

export const GlobalInfo = createContext();


const getDay=(item)=>{
  console.log(item)
}

function App1() {
  const [color, setColor] = useState("green")

  return (
    <GlobalInfo.Provider value={{appColor:color, getDay:getDay}}>
    <div className="App">
      <h1>App</h1>
      <Child />
      <OtherChild />
    </div>
    </GlobalInfo.Provider>
  
  );
}

export default App1;

