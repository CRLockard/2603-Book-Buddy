import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getBook } from "../auth/books";

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
  function handleGoBackToList() {
    navigate(`/books`);
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
        <button onClick={handleGoBackToList}>Back To List</button>
        {!book.available ? (
          <button className="Unavailable">Book Unavailable</button>
        ) : (
          <button className="available">Reserve Book</button>
        )}
      </div>
    </section>
  );
}

export default BookDetails;
