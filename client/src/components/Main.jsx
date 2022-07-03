import axios from "axios";
import { useEffect, useState } from "react";
import ModalTasks from "./Modal/modal.component";

export default function Main(props) {
  const [tasks, setTasks] = useState([]);
  const [taskData,setTaskData] = useState([]);
  const [modal, setModal] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/todos").then((res) => {
      setTasks(res.data);
    });
  }, []);
  useEffect(() => {
    if (tasks.length !== 0) {
      setModal(
        tasks.map((task, i) => {
        return {
          on: false,
          id: task.id,
          }})
          );
    }
  }, [tasks]);

  function handleClick(taskid) {
    axios.get(`http://localhost:8080/api/todos/${taskid}`).then((res) => {
    });
  }
  function handleReportClick(e, taskId) {
    setShow(()=>!show);
    console.log(taskId)
    axios.get(`http://localhost:8080/reports/${taskId}`).then((res) => {
      setTaskData(res.data);
    });

    modal.filter((task) => task.id === taskId?
    setModal((t)=>t.map((task)=>task.id===taskId?{...task,on:!task.on}:task))
    :null);
    console.log(modal);
  }
  return (
    <div className="taskmain">
      <fieldset>
        <legend>Task List</legend>
        {tasks.map((task) => (
          <ul key={task.id}>
            <li>Task: {task.task}</li>
            <li>Description: {task.description}</li>
            <li>status: {task.status ? "true" : "false"}</li>
            <input
              type="button"
              value="Run Task"
              onClick={() => handleClick(task.id)}
            />
            <input
              type="button"
              value="Show Reports"
              onClick={(e) => handleReportClick(e,task.id)}
            />
            {show ?<ModalTasks key={task.id} modal={setShow} data={taskData} taskId={task.id} on={modal} status={task.status}/>:null}
          </ul>
        ))}
        <button onClick={() => props.page(0)}>Go to Add Task Page</button>
      </fieldset>
    </div>
  );
}
