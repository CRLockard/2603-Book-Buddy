import { getAllBooks } from "../auth/books";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const books = await getAllBooks();
      setAllBooks(books);
    }
    loadBooks();
  }, []);

  console.log("allbooks", allBooks);

  return (
    <section className="BookList">
      {allBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}

export default BookList;
