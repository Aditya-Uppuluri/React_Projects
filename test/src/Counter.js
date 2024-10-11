import React from 'react';
import { useState } from 'react';

export default function CounterButton() {
    const [count, setCount] = useState(0);
return (
<>
    <button onClick = {() => setCount(count+1)}>
            +
    </button>

    <button onClick = {() => setCount(count-1)}>
            -
    </button>


    <h1>{count}</h1>
    </>
);

}