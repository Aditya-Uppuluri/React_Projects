import logo from './logo.svg';
import { useState } from 'react';
import { CounterButton, SimpleCounter } from './Counter'  
import './App.css';


const user = {
  name : "Aditya Abhiram",
  branch: "CSE",
  rollno: "19BCE1103"
};

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there {user.name}.<br />How do you do? How is your branch, {user.branch}</p>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick(increment = 1) {
    setCount(count + increment);  // Increment or decrement the count
  }

  return (
    <div className="App">
        <AboutPage />
        <CounterButton />
        <CounterButton />
        <SimpleCounter count={count} onClick={handleClick} />
        <SimpleCounter count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
