import React,{useReducer} from "react";

const Reducer = () => {
    const initialState = 0;
    const reducer = (state,action)=>{
        console.log("state,action",state,action)
        if(action.type === "INCREMENT"){
            return state+1
        }

        if(action.type === "DECREMENT"){
            return state-1
        }

    }

    const [state,dispatch] = useReducer(reducer,initialState)

   
  return <>
    <h2>useReducer hook react</h2>
    <h3>{state}</h3>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>ADD</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>SUBTRACT</button>
  </>;
};

export default Reducer;
