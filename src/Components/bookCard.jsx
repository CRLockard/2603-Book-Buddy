function BookCard({ book }) {
  return (
    <article className="BookCard">
      <img src={book.coverimage} alt={`The cover of ${book.title}`} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p className="BookDescription">{book.description}</p>
      <button className="MoreInfo">More Info</button>
    </article>
  );
}

export default BookCard;
