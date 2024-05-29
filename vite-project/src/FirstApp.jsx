import { useState } from "react"
import { useCounter } from "./hooks/useCounter"
import FetchComponent from './components/FetchComponent.jsx'

const FirstApp = ({ value }) => {
    const { counter, handleAdd, handleSubstract, handleReset } = useCounter(value);

    return (
        <>
            <FetchComponent count={counter} />
            <h1>Counter</h1>
            <span>{counter}</span>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubstract}> -1 </button> 
            <button onClick={handleReset}> Reset </button> 
        </>
    )
}

export default FirstApp;
