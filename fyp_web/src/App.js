import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from "./components/Login/LoginPage";
import Home from "./components/Home";
import LoginContext from "./components/Login/LoginContext";

const App = () => {
  /*const adminUser = {
    username: "FMadmin",
    password: "+34Myojwa"
  }

  const [ user, setUser ] = useState({username: "", password: ""});
  const [ error, setError ] = useState("");
const [ isLoggedIn, setLoggedIn ] = useState(false)*/
  const {token} = useContext(LoginContext);

  /*const Login = details => {
    console.log(details);

    if (details.username == adminUser.username && details.password == adminUser.password) {
      console.log ("Logged in");
      setUser({
        username: details.username
      })
      setLoggedIn(true)
    } else {
      console.log("Login not found")
      setError("Login not found")
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({username: "", password: ""})
  }*/

  useEffect(() => {
    localStorage.clear()
  })

  return (
    <>
    {!token ? 
    (
      <Router>
          <Routes>
            <Route path='/' element={<LoginPage />}/>
          </Routes>
      </Router>           
    ) : (
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </Router>
    )
    }</>);
}

export default App;
