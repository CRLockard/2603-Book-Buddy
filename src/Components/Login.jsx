import { useAuth } from "../auth/AuthContext";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function Login() {
  const { login } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    setError(null);
    event.preventDefault();
    const formdata = new FormData(event.target);

    const email = formdata.get("email");
    const password = formdata.get("password");

    try {
      await login({ email, password });
      navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="LoginCard">
      <h1>Login</h1>

      {error && <p className="LoginError">{error}</p>}

      <form onSubmit={handleLogin} className="LoginForm">
        <label>
          Email
          <input type="text" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Login</button>
      </form>
      <NavLink to="/register">Need to create an account? Click Here.</NavLink>
    </div>
  );
}

export default Login;
