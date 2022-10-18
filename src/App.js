import { useState } from "react";
import "./App.css";


function App() {
  const [firstInput, setFirstInput] = useState(" ");
  const [twoInput, setTwoInput] = useState("");
  const [theeInput, setThreeInput] = useState("");

  const changeInputValue = (event) => {
    setFirstInput(event.target.value);
  };
  const twoInputValue = (event) => {
    setTwoInput(event.target.value);
  };
  const threeInputValue = (event) => {
    setThreeInput(event.target.value);
  };

  const addData = () => {
    const data = {
      name: firstInput,
      age: twoInput,
      num: theeInput,
    };
    console.log(data);

    setFirstInput("");
    setTwoInput("");
    setThreeInput("");
  };

  return (
    <div className="App">
      <div className="first-input">
        <label htmlFor="add"> name </label>
        <input
          className="input"
          type="text"
          id="add"
          value={firstInput}
          onChange={changeInputValue}
        />
      </div>
      <div>
        <label htmlFor="add"> age </label>
        <input
          className="input"
          type="text"
          id="add"
          value={twoInput}
          onChange={twoInputValue}
        />
      </div>
      <div className="three-input">
        <label htmlFor="add"> num </label>
        <input
          className="input"
          type="text"
          id="add"
          value={theeInput}
          onChange={threeInputValue}
        />
      </div>
      <div>
        <button onClick={addData}> add </button>
      </div>
    
    </div>
  );
}

export default App;
