import { useState } from "react";
function BookEdit({ book, onSubmit }) {
  const [name, setName] = useState(book.title);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, name);
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
