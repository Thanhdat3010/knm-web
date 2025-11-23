import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./routes/home";
import MemberDetail from "./routes/MemberDetail";
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/member/:id" element={<MemberDetail />} />
    </Routes>
  </div>

  );
}

export default App;
