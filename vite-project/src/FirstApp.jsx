import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy, decrementBy, reset } from './redux/counterSlice';

const FirstApp = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const [amount, setAmount] = useState(0);

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSubtract = () => {
    dispatch(decrement());
  };

  const handleIncrementBy = () => {
    dispatch(incrementBy(Number(amount)));
  };

  const handleDecrementBy = () => {
    dispatch(decrementBy(Number(amount)));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <h1>Counter</h1>
      <span>{counter}</span>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubtract}> -1 </button>
      <button onClick={handleReset}> Reset </button>
      <div>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Enter amount"
        />
        <button onClick={handleIncrementBy}> Increment By </button>
        <button onClick={handleDecrementBy}> Decrement By </button>
      </div>
    </>
  );
};

export default FirstApp;
