import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getBook } from "../api/books";

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
