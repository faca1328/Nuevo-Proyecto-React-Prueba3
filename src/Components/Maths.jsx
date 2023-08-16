import React, { useState, useMemo } from 'react';

export function Maths() {
    const [numberList, setNumberList] = useState([1,2,3,4,5,6,7,8,9]);

    const multiplyNumbers = useMemo(() => {
        return numberList.reduce((a, b) => a * b);
    }, [numberList]);

    const addNumber = () => {
        setNumberList([...numberList, numberList[numberList.length - 1] + 1]);
    };

    const [show, setShow] = useState(true);

    return (
        <>
            <h3>Result: {multiplyNumbers}</h3>

            <button onClick={addNumber}>Add Number</button>
            <button onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
        </>
    );
}
