import { getAccountdetails } from "../api/user";
import { useAuth } from "../auth/AuthContext";
import { useState, useEffect } from "react";
import BookCard from "./bookCard";

function Account() {
  const { token } = useAuth();

  const [user, setUser] = useState(null);

  async function loadUser() {
    const data = await getAccountdetails(token);
    setUser(data);
  }

  useEffect(() => {
    loadUser();
  }, [token]);

  if (!user) {
    return <h3>Loading Account Details....</h3>;
  }

  return (
    <>
      <section className="UserDetails">
        <article className="AccountInfoPanel">
          <h2>Hi {user.firstname}</h2>
          <p className="UserDetailsName">
            Name: {user.firstname} {user.lastname}
          </p>
          <p className="UserDetailsEmail">Email: {user.email}</p>
          <p className="UserDetailsReservations">
            Book Reservations: {user.reservations.length}
          </p>
        </article>
        <article className="ReservationsList">
          {user.reservations.map((reservation) => (
            <BookCard
              key={reservation.id}
              book={reservation}
              myReservation={true}
              token={token}
              returnedBookReload={loadUser}
            />
          ))}
        </article>
      </section>
    </>
  );
}

export default Account;
