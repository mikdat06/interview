import React from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
function App() {
  return (
    <div className="App">
      <Header/>
      <Question/>
    </div>
  );
}

export default App;
