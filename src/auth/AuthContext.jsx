import { createContext, useContext, useState } from "react";

const BASE_API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
const REGISTER = "/users/register";
const LOGIN = "/users/login";
const REGISTRATION_API = BASE_API + REGISTER;
const LOGIN_API = BASE_API + LOGIN;

const AuthContext = createContext();

export function AuthProvider({ children }) {
  function localTokenCheck() {
    return localStorage.getItem("token");
  }

  const [token, setToken] = useState(localTokenCheck);

  const register = async (credentials) => {
    const response = await fetch(REGISTRATION_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) {
      throw Error(result.message);
    }
    setToken(result.token);
    localStorage.setItem("token", result.token);
  };

  //this allows me to use toke, register, login and logout throughout my application
  //This helps with displaying things contextually.
  const login = async (credentials) => {
    const response = await fetch(LOGIN_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) {
      throw Error(result.message);
    }
    setToken(result.token);
    localStorage.setItem("token", result.token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const value = { token, register, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}
