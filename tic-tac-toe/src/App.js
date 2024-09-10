import "App.css"

function Daddycall() {
  console.log("Click me dadi");
}

// const DaddyCall1 = () => {

// }

function MyButton() {
  return (
    // <button onClick = {Daddycall}>
    <button onClick = {() => console.log("Click me dadi")}>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
