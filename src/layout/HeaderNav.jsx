import { Link, NavLink } from "react-router";

//change loutout later, should not link to new page
//logout should call function to remove token
function HeaderNav() {
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
        <NavLink to="/account">My Books</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <p>Logout</p>
      </nav>
    </header>
  );
}
export default HeaderNav;
