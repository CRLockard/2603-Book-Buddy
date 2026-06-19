import { useEffect, useState } from "react";
import { useParams } from "react-router";
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

  return (
    <section className="BookDetails">
      <img src={book.coverimage} alt={`The cover of ${book.title}`} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p className="BookDescription">{book.description}</p>
    </section>
  );
}

export default BookDetails;
