import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
function BookCreate() {
  const { createBook } = useBooksContext();

  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <title>Title</title>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">submit</button>
      </form>
    </div>
  );
}
export default BookCreate;
