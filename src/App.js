import logo from "./logo.svg";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);
  // const createBook = async (title) => {
  //   const updatedBooks = [
  //     ...books,
  //     { id: Math.floor(Math.random() * 999), title },
  //   ];
  //   console.log(updatedBooks);
  //   setBooks(updatedBooks);
  // };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = async (id) => {
    // console.log("deleting book: ", id);

    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const checkState = () => {
    console.log(books);
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
  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
      <BookCreate onSubmit={createBook} />
      <button onClick={checkState}>check</button>
    </div>
  );
}

export default App;
