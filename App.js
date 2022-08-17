import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useContext } from "react";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/login"> Login</Link>
            </li>
            <li>
              <Link to="/home/taqasur"> Home </Link>
            </li>
          </ul>
          <AuthProvider>
            <div>
              <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/home/:fname" element={<Home />}></Route>
              </Routes>
            </div>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
