import React from 'react';
import useCounter from './useCustom';

const Custom = () => {
    const [count,Increment,Decrement] = useCounter();
  return (
    <>
    <h2>Custom Hook</h2>
    <h3>{count}</h3>
    <button onClick={Increment}>Inc</button>
    <button onClick={Decrement}>Dec</button>
    </>
  )
}

export default Custom