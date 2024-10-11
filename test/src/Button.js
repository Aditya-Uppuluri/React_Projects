import React from 'react';

function MyButton() {
    const user = {
        name: "Aditya Abhiram",
        age : 21
    };

    function Handler(user){
        alert(`Hey, I've been clicked using a normal function by ${user.name}!`);
    }

    function AlertMsg() {
        alert("Hey I've been invoked without using an arrow function!")
    }
    
    return (
        <button onClick = {() => Handler(user)}>
            Click me!
        </button>
    )
}

export default MyButton;