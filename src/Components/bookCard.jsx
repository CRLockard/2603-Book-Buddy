import { useNavigate } from "react-router";

//brought in the useNavigate so that I could go to the details page of the book using the ID

function BookCard({ book }) {
  const navigate = useNavigate();

  //function to handle clicking on a book and going to details
  function handleDetails() {
    navigate(`/books/${book.id}`);
  }
  //function retruns a bookcard for use in booklist
  //This grabs the book information and displays them
  return (
    <article className="BookCard">
      <img src={book.coverimage} alt={`The cover of ${book.title}`} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p className="CardBookDescription">{book.description}</p>
      <button className="MoreInfo" onClick={handleDetails}>
        More Info
      </button>
    </article>
  );
}

export default BookCard;
