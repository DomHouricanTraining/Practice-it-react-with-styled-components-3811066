import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return <div>
      <Counter />
      <h1>Hello World of React!</h1>
  </div>;
};

export default App;
