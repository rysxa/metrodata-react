import React, { useState } from "react";

const UseStates = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Ini useStates</h2>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default UseStates;