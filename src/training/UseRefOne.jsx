import React, { useRef } from "react";

const UserRefOne = () => {
    const countRef = useRef(1);

    const incrementCount = () => {
        countRef.current += 1;
        console.log("Current count: ", countRef.current);
    };

    return (
        <div>
            <p>Current Count: {countRef.current}</p>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
};
export default UserRefOne;