import React, { useState } from "react";
import './App.css';
import Editable from './components/Editable';
import BestPractices from "./components/BestPractices";




function App() {

  const [task, setTask] = useState("");


  return (
    <div className="App">
      <BestPractices/>
      <div className="edit-box">
      <Editable
      text={task}
      placeholder="Place where you can edit text"
      type="input"
    >
      <input
        type="text"
        name="task"
        placeholder="Place where you can edit text"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
    </Editable>
    </div>
    <br/>
    
    </div>
  );
}

export default App;
