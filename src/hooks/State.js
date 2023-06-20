import React,{useState} from 'react'

const State = () => {
    const [data,setData] = useState("Vishal")
  return (
    <>
    <h1>{data}</h1>
    <button onClick={()=>setData("Rinku")}>Change Name</button>
    </>
  )
}

export default State