import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  // const [allEntry, setAllEntry] = useState([]);
  const { user, setUser } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        username,
        password,
      };
      setUser([...user, newEntry]);
      navigate("/home");
    } else {
      alert("plz fill the data");
    }

    // setUser({ authUsername: username, authPassword: password });
    // navigate("/home");
  };

  return (
    <>
      <div className="list-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container mb-7">
            <label>Username: </label>
            <input
              value={username}
              // value={user?.username}
              onChange={(e) => setUsername(e.target.value)}
              // (e) => setUsername(e.target.value)
              // setUser((prev) => ({ ...prev, username: e.target.value }))

              placeholder="Login Name"
              name="username"
            />
            <input
              type="password"
              value={password}
              // value={user?.password}
              onChange={(e) => setPassword(e.target.value)}
              // setPassword(e.target.value);
              // setUser((prev) => ({ ...prev, password: e.target.value }));

              placeholder="Password"
              name="password"
            />

            <input type="submit" />
            {/* <input
              type="text"
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
              name="username"
              id="username"
              required
            /> */}
          </div>
          {/* <div className="input-container">
            <label>Password </label>
            <input
              type="password"
              onChange={handleInput}
              value={user.password}
              id="password"
              name="password"
              required
            />
          </div> */}
        </form>
      </div>
      {/* <div>
        {user.map((curElem) => {
          const { id, username, password } = curElem;
          return (
            <div className="showDataStyle" key={id}>
              <p>{username}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
};
export default Login;
