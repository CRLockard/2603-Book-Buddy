import { useNavigate } from "react-router";

function BookCard({ book }) {
  const navigate = useNavigate();

  function handleDetails() {
    navigate(`/books/${book.id}`);
  }

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
