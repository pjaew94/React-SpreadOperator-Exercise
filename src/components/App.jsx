import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  const [savedItems, setSavedItems] = useState([]);

  function changeHandler(evt) {
    const newValue = evt.target.value;
    setInputText(newValue);
  }

  function save() {
    setSavedItems(prev => {
      return [...prev, inputText];
    });

    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" value={inputText} />
        <button onClick={save}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {savedItems.map(items => (
            <li>{items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
