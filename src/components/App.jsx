import React, { useState } from "react";


function App() {
  //  eslint-disable-next-line
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [addname, setAddname] = useState("")

  function handleClick() {
    setHeadingText("Welcome")
    setAddname(name);
  }

  function handleMouseOver(){
    setMouseOver(true)
  }

  function handleMouseOut() {
    setMouseOver(false)
  }

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>{headingText} {addname}</h1>
      <input
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?" 
      value={name}  
      />
      <button 
      style={{backgroundColor: isMouseOver ? "black" : "white"}}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      
      >Submit</button>
    </div>
  );
}

export default App;
