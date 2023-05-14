import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  ////
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const removeBook = () => {
    deleteBookById(book.id);
  };
  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content = book.title;

  if (showEdit === true) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }
  return (
    <div className="book-show">
      <div className="actions">
        <button className="edit" onClick={toggleEdit}>
          edit
        </button>
        <button className="delete" onClick={removeBook}>
          delete
        </button>
      </div>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="pic" />
      {content}
    </div>
  );
}
export default BookShow;
