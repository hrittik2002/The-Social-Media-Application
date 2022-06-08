import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user :JSON.parse(localStorage.getItem("user")) || null,
// {
//   _id:"6290c9536faef476fa8e67f4",
//   username:"user1",
//   email :"user1@gmail.com",
//   password :"$2b$10$U67oJMW8KCzgTHzNioHyzOsaR3fYEO7zZcBGr0JYEMrS0PMUOxZuG",
//   profilePicture:"",
//   coverPicture:"",
//   isAdmin:false,
//   followers:[],
//   followings:[],
// },
  isFetching: false,
  error: false,
};



export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};