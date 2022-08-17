import { createContext, useState } from "react";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Home from "../pages/Home";
//  create context
export const AuthContext = createContext();

//  context provider
export const AuthProvider = (props) => {
  const [user, setUser] = useState([]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
