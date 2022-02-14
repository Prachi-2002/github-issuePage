import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { useState } from 'react';
import Navbar from './Components/Navbar';
import {product} from "./Components/Project.json";
import Labels from './Components/Labels';
import NewIssuePage from './Components/NewIssuePage';
import Project from './Components/Projects/Project';
import ButtonCompo from './Components/ButtonCompo';
import DropDownItem from './Components/DropDownItem';
function App() {
const[token,setToken] = useState(false);
  return (
    <div>
    <BrowserRouter >
   <Routes>
     <Route path="/" element={<Login />}></Route>
     <Route path="/Header" element={<Login/>}></Route>
     <Route path="/Issues" element={<Navbar />}></Route>
     <Route path="/DropDown" element={<DropDownItem />}></Route>
     <Route path="/Labels" element={<Labels />}></Route>
     <Route path="/NewIssue" element={<NewIssuePage />}></Route>


   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
