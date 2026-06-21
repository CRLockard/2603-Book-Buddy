import { Link, NavLink, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";

//change loutout later, should not link to new page
//logout should call function to remove token
function HeaderNav() {
  const { logout, token } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="HeaderNav">
      <Link to="/books" className="HeaderLink">
        <img
          className="HeaderLogo"
          src="/books.png"
          alt="side view of 3 stacked books"
        ></img>
        <h1>Book Buddy</h1>
      </Link>

      <nav>
        {token ? (
          <>
            <NavLink to="/account">My Books</NavLink>
            <p onClick={handleLogout}>Logout</p>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
export default HeaderNav;
