import "./App.css";
import Manager from "./components/Manager";
function App() {
  const task = { title: "Task 1", description: "Task 1 description" };
  console.log(task);
  return (
    <div className="App">
      <Manager/>
    </div>
  );
}

export default App;
