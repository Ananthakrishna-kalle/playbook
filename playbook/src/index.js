import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/signup';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
//import App from "./App";

const root = ReactDOM.createRoot(
 

  document.getElementById("root")
);

root.render(
  <Router>
    
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/home" element={<Home />} />
    
   
  </Routes>
  
</Router>,
);

//serviceWorker.unregister();
reportWebVitals();
