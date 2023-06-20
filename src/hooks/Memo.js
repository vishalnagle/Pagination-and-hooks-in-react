import React, { useState,useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  
//   usememo hook

const memocount = useMemo( ()=>{
    console.log("multi count")
    return count*5;
  },[count])
  return (
    <>
      <h1>useMemo Hook</h1>
      <h2>Count:{count}</h2>
      <h2>Item:{item}</h2>
      {/* <h2>{memocount}</h2> */}
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 5)}>Update Item</button>
    </>
  );
};

export default Memo;
