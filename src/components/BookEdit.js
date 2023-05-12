import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [name, setName] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, name);
    onSubmit();
  };
  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit}>
        <title>Title</title>
        <input className="input" value={name} onChange={handleChange} />
        <button className="button">submit</button>
      </form>
    </div>
  );
}
export default BookEdit;
