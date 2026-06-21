import { useAuth } from "../auth/AuthContext";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function Register() {
  const { register } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleRegistration = async (event) => {
    setError(null);
    event.preventDefault();
    const formdata = new FormData(event.target);

    const firstname = formdata.get("firstname");
    const lastname = formdata.get("lastname");
    const email = formdata.get("email");
    const password = formdata.get("password");

    try {
      await register({ firstname, lastname, email, password });
      navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="Registration">
      <h1>New Account Registration</h1>

      {error && <p className="registrationError">{error}</p>}

      <form onSubmit={handleRegistration} className="RegistrationForm">
        <label>
          First Name
          <input type="text" name="firstname" required />
        </label>
        <label>
          Last Name
          <input type="text" name="lastname" required />
        </label>
        <label>
          Email
          <input type="text" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Register</button>
      </form>
      <NavLink to="/login">Already Have an account? Click Here.</NavLink>
    </div>
  );
}

export default Register;
