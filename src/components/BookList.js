import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";
function BookList({ books, onDelete, onEdit }) {
  const {} = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;
