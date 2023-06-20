import React,{useState,useCallback} from 'react';
import Child from './Child';

const Callback = () => {
    const [add, setAdd] = useState(0)
    const [count,setCount] = useState(0)
    const Learning = useCallback(()=>{

    },[count])

  return (
    <>
    <h2>useCallback Hook</h2>
    <Child Learning={Learning} count={count}/>
    <h2>{add}</h2>
    <h2>{count}</h2>
    <button onClick={()=>setAdd(add+2)}>Addition</button>
    <button onClick={()=>setCount(count+5)}>Counter</button>
    </>
  )
}

export default Callback