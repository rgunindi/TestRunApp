import { useState,useEffect } from "react";
import Main from "./Main";
import TaskList from "./TaskList";
export default function Manager(props) {
  const [page, setPage] = useState(0);
  useEffect(() => {

  });

  return (
    <div className="manager">
      {page === 0 && <TaskList page={setPage}/>}
      {page === 1 && <Main page={setPage}/>}
    </div>
  );
}
