import "./App.css";
// import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { CompanyList } from "./CompanyList";
import { UserList } from "./UserList";
import { QuestionList } from "./QuestionList";
import { AskQuestion } from "./AskQuestion";
import { useState } from "react";
import { API } from './globalAPI';
import { SignUp } from "./SignUp";


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <Link to="/Question">Questions</Link>
          <li>
             </li>
          <Link to="/askQuestion">AskQuestions</Link>
          <li>
            <input type="search" />
          </li>
          <Link to="/user-profile">User Profile</Link>
          <li>
            <Link to="/Company">Company</Link>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/login");
                localStorage.removeItem("token");
              }}
            >Logout</button>
          </li>
        </ul>
        <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/signUp" element={ <SignUp /> } />

          <Route path="/Home" element={ <Require> <Home /> </Require>} />
          <Route path="/Company" element={ <Require><CompanyList /></Require>} />
          <Route path="/user-profile" element={<Require><UserList /></Require> } />
          <Route path="/Question" element={<Require><QuestionList /></Require> } />
          <Route path="/askQuestion" element={<Require><AskQuestion /></Require> } />

        </Routes>
      
      </nav>
    </div>
  );
}

function Home() {
  return <div>welcome to stack OverFlow clone</div>;
}

function Require({ children }) {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate replace to="/login" />
}

function Login() {

  const[userName, setUserName] = useState([]);
  const[password, setPassword] = useState([]);

  const storeToken = () => {
    const user = {
      userName: userName,
      password: password,
    }

    fetch(`${API}/users/login`, {
      method:"POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((data) => data.json())
    .then((auth) => localStorage.setItem("token", auth.token));
 }  
  return (
    <div>
      <input 
      onChange={(event) => setUserName(event.target.value)}
      type="text" 
      value="prasanth"
      placeholder="Enter your name" />
      <input 
      onChange={(event) => setPassword(event.target.value)}
      type="text" 
      value="password@123"
      placeholder="Enter your Password" />
      <button onClick={storeToken}>Login</button>
      <button>Forgot Password</button>
    </div>
  );
}

export default App;
