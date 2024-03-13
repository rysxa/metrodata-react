import React, { useEffect, useState } from "react";

function useEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const storedNumber = localStorage.getItem('number');
        if (storedNumber) {
            setNumber(parseInt(storedNumber));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("number", number);
    }, [number]);

    return (
        <div>
            <p>Angka: {number}</p>
            <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Tambah 1</button>
        </div>
    )
}

export default useEffectTwo;