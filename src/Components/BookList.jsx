import { getAllBooks } from "../api/books";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

//this functions creates a state to hold all the books
//it also uses use Effect to load the books initally and not on every change
//it then maps through each book and calls the bookcard function to build out each one.

function BookList() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const books = await getAllBooks();
      setAllBooks(books);
    }
    loadBooks();
  }, []);

  return (
    <section className="BookList">
      {allBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}

export default BookList;
