import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [name, setName] = useState(book.title);
  const { editBookById } = useBooksContext();

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
