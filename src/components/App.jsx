import React, { useState } from "react";


function App() {
  //  eslint-disable-next-line
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [addname, setAddname] = useState("")

  function handleClick(event) {
    setHeadingText("Welcome")
    setAddname(name);

    event.preventDefault();
  }

  function handleMouseOver(){
    setMouseOver(true);

    
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
      <form onSubmit={handleClick}>
      <input
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?" 
      value={name}  
      />
      <button 
      type="submit"
      style={{backgroundColor: isMouseOver ? "black" : "white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      
      >Submit</button>
      </form>
    </div>
  );
}

export default App;
