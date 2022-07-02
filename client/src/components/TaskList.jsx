import { useState } from "react";
import axios from "axios";
export default function TaskList(props) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState([]);

  function handleElement(e) {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "file") {
      setFile(e.target.files[0]);
    }
  }
  function handleClick() {
    let formdata = new FormData();
    formdata.append("task", task);
    formdata.append("description", description);
    formdata.append("file", file);
    axios.post("http://localhost:8080/api/todos", formdata);
  }
  return (
    <>
      <div className="taskList">
       <div className="form">
       <h3>Task Add Form</h3>
        <input type="text" name="task" onChange={(e) => handleElement(e)} />
        <input
          type="text"
          name="description"
          onChange={(e) => handleElement(e)}
        />
        <input type="file" name="file" onChange={(e) => handleElement(e)} />
        <input type="button" value="Add Task" onClick={() => handleClick()} />
      <button onClick={() => props.page(1)}>Go to Tasks Page</button>
       </div>
      </div>
    </>
  );
}
