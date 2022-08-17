import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    setUser(null);
    navigate("/login");
  };
  // const obj = Object.values(user);
  console.log(user);
  const { fname } = useParams();
  return (
    <>
      <div>
        <>
          <h1>{fname}</h1>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </>
        <div>
          {user.map((curElem) => {
            const { id, username, password } = curElem;
            return (
              <>
                <table>
                  <thead></thead>
                  <tbody>
                    <tr key={id}>
                      <td>{username}</td>
                      <td>{password}</td>
                      <td style={{ padding: "20px", margin: "20px" }}>
                        <button onClick={handleClick}>Logout</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })}
        </div>
        {/* {Object.values(user).map((curr, index) => {
              return (
                <div>
                  <p key={index}></p>
                  <p>User: {curr?.authUsername}</p>
                  <p>Password: {curr?.authPassword}</p>
                  <button onClick={handleClick}>Logout</button>
                </div>
              );
            })} */}
        {/* <div>
            {obj.map((curr, index) => {
              return (
                <div key={index}>
                  <p> hi {curr.authUsername}</p>
                  <p> hi {curr.authPassword}</p>
                </div>
              );
            })}
          </div> */}

        {/* <p>User: {user?.authUsername}</p>
      <p>Password: {user?.authPassword}</p> */}
        {/* <button onClick={handleClick}>Logout</button> */}
      </div>
    </>
  );
};
export default Home;
