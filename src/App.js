import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [textChange, setTextChange] = useState(false);

  useEffect(() => {
    setTextChange(true);
  }, [text]);

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setText("Hello")}>Button1</button>
        <button onClick={() => setText("Everyone")}>Button2</button>
        <button onClick={() => setText("Who Loves")}>Button3</button>
        <button onClick={() => setText("Programming")}>Button4</button>
      </div>
      {textChange && <h4>The Text has changed to {text}</h4>}
    </div>
  );
}

export default App;
