import React from 'react'

function Exersise1() {
    const intialState=0
    const  [count, setCount] = React.useState(intialState);
  const  incrementCounter =(counter)=>{
    setCount(count + 1);
    }
    const  decrementCounter =(counter)=>{
        setCount(count - 1);
    }
    const  Reset =(counter)=>{
        setCount(intialState);
    }
    return (
        <div className='conatiner'>
           <h3> Counter: {count}</h3>
           <div className='btns'>
          <button onClick={incrementCounter}>Increment</button>
          <button onClick={decrementCounter}>Decrement</button>
          <button onClick={Reset}>Reset</button>
          </div>
        </div>
    )
}
export default Exersise1