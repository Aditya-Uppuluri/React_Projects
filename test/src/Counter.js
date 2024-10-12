import React from 'react';
import { useState } from 'react';

function SimpleCounter({ count, onClick }) {
    return (
        <>
            <button onClick={() => onClick(1)}>
                Click me to increment!
            </button>
            <button onClick={() => onClick(-1)}>
                Click me to decrement!
            </button>
            <h1>I've been clicked {count} times</h1>
        </>
    );
}

function CounterButton() {
    const [count, setCount] = useState(0);
//this essentially what the user will be seeing.
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

export { SimpleCounter, CounterButton };  