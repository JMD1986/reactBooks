import axios from "axios";
import { createContext, useState, useContext } from "react";

const BooksContext = createContext();

function useBooksContext() {
  return useContext(BooksContext);
}

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const valuesToShare = {
    books,
    fetchBooks,
    deleteBookById,
    editBookById,
    createBook,
  };
  return (
    <BooksContext.Provider value={valuesToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
