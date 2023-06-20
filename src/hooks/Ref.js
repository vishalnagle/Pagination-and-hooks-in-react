import React,{useRef} from 'react'

const Ref = () => {
    let inputRef = useRef(null)
    const handleClick =()=>{
        console.log("function call")
        inputRef.current.value = "1000"
        inputRef.current.focus();
        inputRef.current.style.color = "red"

    }
  return (
    <>
    <h2>useRef in react</h2>
    <input type="text" ref={inputRef}/>
    <button onClick={handleClick}>Click</button>
    </>
  )
}

export default Ref;