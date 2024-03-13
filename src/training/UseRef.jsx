import React, { useRef } from "react";

const UserRef = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus the Input</button>
        </div>
    );
};
export default UserRef;