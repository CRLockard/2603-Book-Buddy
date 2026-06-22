import { useNavigate } from "react-router";
import { returnBook } from "../api/reservations";

//brought in the useNavigate so that I could go to the details page of the book using the ID

function BookCard({ book, myReservation, token, returnedBookReload }) {
  const navigate = useNavigate();

  //function to handle clicking on a book and going to details
  function handleDetails() {
    navigate(`/books/${book.id}`);
  }

  async function handleReturn() {
    await returnBook(token, book.id);
    await returnedBookReload();
  }
  //function retruns a bookcard for use in booklist
  //This grabs the book information and displays them
  return (
    <article className="BookCard">
      <img src={book.coverimage} alt={`The cover of ${book.title}`} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p className="CardBookDescription">{book.description}</p>
      {myReservation ? (
        <button onClick={handleReturn}>Return Book</button>
      ) : (
        <button className="MoreInfo" onClick={handleDetails}>
          More Info
        </button>
      )}
    </article>
  );
}

export default BookCard;
