import { useState } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';

function App() {
  const [books , setBooks] = useState([]);

  const createBookHandler = (title) => {
    console.log('Need to add book with: ',title);
  };

  return (
    <div>
      <BookCreate onCreate={createBookHandler} />
    </div>
  );
}

export default App;
