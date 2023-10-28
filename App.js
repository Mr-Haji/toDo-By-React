import { useState } from "react";
import "./App.css"
function App() {
  const [inputValue, SetInputValu] = useState("");
  const [toDoData, setToDoData] = useState([]);

  const addToDOHandeler = () => {
 if(inputValue !== ""){

  setToDoData((prev) => [...prev, inputValue]);
  SetInputValu("");

 }
 else{
  alert("Please Filled your Task")
 }


  };

  const editToDOHandeler = (index) => {
    let a = prompt("Add To Do");
    const arr = [...toDoData];
    arr[index] = a;
    setToDoData(arr);
  };

  const deleteToDOHandeler = (index) => {
    const arr = toDoData.filter((e, i) => i !== index)
    setToDoData(arr)
  };
  const deleteAllToDo = () => {
    setToDoData([])
  };

  return (
    <div className="section">
      <div className="masterDiv">

        <input className="mainInp"
          onChange={(e) => SetInputValu(e.target.value)}
          placeholder="New To Do"
          value={inputValue}
        />
        <div >

          <button className="mainBtn" onClick={addToDOHandeler}>Add</button>
          <button className="mainBtn" onClick={deleteAllToDo}>Delete All</button>

        </div>
      </div>
      <ol className="list">
        {toDoData.length
          ? toDoData.map((e, i) => (
            <li key={i} >
              {e}
              <button className="liBtn" onClick={() => editToDOHandeler(i)}>Edit</button>
              <button className="liBtn" onClick={() => deleteToDOHandeler(i)}>Delete</button>

            </li>
          ))
          : <span className="display">
            All Your Task Listed Here</span>}
      </ol>
    </div>
  );
}

export default App;


















// useState
// routing
// components
// closer
// lexical
// hosting
// cinditional Rendering