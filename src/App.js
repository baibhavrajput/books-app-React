import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([]);

  const createBookHandler = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBookHandler} />
    </div>
  );
}

export default App;
