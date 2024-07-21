import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

function incCounter() {
    return setCount(count+1);
}

function decCounter() {
    return setCount(count-1);
}

    return (
        <div
            style={{
                width: "300px",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <button onClick={decCounter}>Decrement</button>
            <div>{`Counter: ${count}`}</div>
            <button onClick={incCounter}>Increment</button>
        </div>
    );
}

export default Counter;