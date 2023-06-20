import React,{useState,useEffect} from 'react'

const Effect = () => {
    const [count,setCount] = useState(100)
   const [data, setData] = useState(10)

    useEffect(()=>{
        console
        .log("first")
    },[])
    useEffect(()=>{
        console.log("second")
    },[])

    useEffect(()=>{
        console.log("count")
    },[count])

    useEffect(()=>{
        console.log("data")
    },[data])

  return (
    <>
    <h2>useEffect Hook</h2>
    <h2>Counter in useEffect: {count}</h2>
    <h2>Data in useEffect: {data}</h2>
    <button onClick={()=>setCount(count+1)}>Update Count</button>
    <button onClick={()=>setData(data+1)}>Update Data</button>
    </>
  )
}

export default Effect