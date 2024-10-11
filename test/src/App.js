import logo from './logo.svg';
import { useState } from 'react';
import CounterButton from './Counter'
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
  return (
    <div className="App">
        <AboutPage />
        <CounterButton />
    </div>
  );
}

export default App;
