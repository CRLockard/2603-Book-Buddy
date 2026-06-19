function BookCard({ book }) {
  return (
    <article className="BookCard">
      <img src={book.coverimage} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
    </article>
  );
}

export default BookCard;
