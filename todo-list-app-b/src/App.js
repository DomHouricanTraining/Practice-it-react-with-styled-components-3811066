import logo from './logo.svg';
import './App.css';
import ToDoList from "./components/ToDoList";

function App() {

  const todos = ['Buy groceries', 'Finish homework', 'Go for a run'];
  return (

    <div>
      <h1>My Glorious ToDo List</h1>
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
