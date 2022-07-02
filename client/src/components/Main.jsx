import axios from "axios";
import { useEffect, useState } from "react";
export default function Main(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/todos").then((res) => {
      setTasks(res.data);
    });

    // fetch("http://localhost:8080/api/todos")
    //   .then((res) => res.json())
    //   .then((data) => setTasks(data));
  }, []);
  useEffect(() => {
    if (tasks.length !== 0) {
      console.log(tasks);
    }
  }, [tasks]);

  function handleClick(e) {
    console.log("HMMM: "+e);
    axios.get(`http://localhost:8080/api/todos/${e}`);
   // setTasks(tasks.filter((task) => task.id !== e.target.id));
  }
  return (
    <div className="taskmain">
      <h1>Task List</h1>
      {tasks.map((task) => (
        <ul key={task.id}>
            <li>Task: {task.task}</li>
            <li>Description: {task.description}</li>
            <li>status: {task.checked ? "true" : "false"}</li>
            <input type="button" value="Run Task" onClick={()=>handleClick(task.id)}/>
        </ul>
      ))}
      <button onClick={() => props.page(0)}>Go to Add Task Page</button>
    </div>
  );
}
