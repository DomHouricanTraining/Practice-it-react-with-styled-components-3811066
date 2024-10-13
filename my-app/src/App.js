import logo from "./logo.svg";
import "./App.css";
//import Counter from "./components/Counter";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/examples/Header";
import Footer from "./components/examples/Footer";
import Button from "./components/examples/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response =>
        setData(response.data))
      .catch(error =>
        console.error('Error fetching data', error));
  }, []);

  return (

    <div>
      <Header />
      <h1>My React App leveraging Axios now!</h1>
      <ul>
        {data.map(post =>
        (
          <li key={post.id}>{post.title}</li>
        ))
        }
      </ul>
      <Button label="Click me!" />
      <Footer />
    </div>
  );

};

export default App;
