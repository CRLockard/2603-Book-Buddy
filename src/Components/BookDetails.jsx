import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getBook } from "../api/books";
import { useAuth } from "../auth/AuthContext";
import { reserveBook } from "../api/reservations";

//This function creates a state for the selected book
//it also uses the useparams function so that the id can get grabbed from the url
//it then loads the book details and waits for an id change to reload
//a handlefunction was added to help with going back to main list.
//It also conditionally displays the reservation button based on book availability
function BookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function loadBook() {
      const data = await getBook(id);
      setBook(data);
    }
    loadBook();
  }, [id]);

  const navigate = useNavigate();
  function handleGo() {
    navigate(-1);
  }

  const { token } = useAuth();

  async function handleReservation() {
    await reserveBook(token, book.id);
    navigate("/account");
  }

  let button;

  if (!book.available) {
    button = <button className="Unavailable">Book Unavailable</button>;
  } else if (!token) {
    button = (
      <button className="available" onClick={() => navigate("/login")}>
        Login to Reserve
      </button>
    );
  } else {
    button = (
      <button className="available" onClick={handleReservation}>
        Reserve Book
      </button>
    );
  }

  return (
    <section className="BookDetails">
      <div className="BookCoverImage">
        <img src={book.coverimage} alt={`The cover of ${book.title}`} />
      </div>
      <div className="BookInfo">
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <p className="BookDescription">{book.description}</p>
      </div>
      <div className="BookDetailsButtons">
        <button onClick={handleGo}>Go back</button>
        {button}
      </div>
    </section>
  );
}

export default BookDetails;
