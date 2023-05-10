import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const removeBook = () => {
    onDelete(book.id);
  };
  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
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
