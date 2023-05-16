import React, { useState } from "react";

const white = {background: "white"}
const black = {background: "black"}

function App() {

  const [color, setColor] = useState(white)
  const [headingText, setHeadingText] = useState("Hello")

  function handleClick() {
    setHeadingText("Welcome")
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={() => setColor(black)} onMouseOut={()=> setColor(white)} onClick={handleClick} style={color}>Submit</button>
    </div>
  );
}

export default App;
