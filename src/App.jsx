import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

const myBooks = [
  { id: '1', title: 'Dune', author: 'Frank Herbert', desc: 'A complex story of politics, religion, and survival on the desert planet Arrakis.' },
  { id: '2', title: 'Project Hail Mary', author: 'Andy Weir', desc: 'A lone astronaut must save Earth from an extinction-level threat using science and logic.' },
  { id: '3', title: 'Neuromancer', author: 'William Gibson', desc: 'The definitive cyberpunk novel about a washed-up computer hacker hired for one last job.' },
  { id: '4', title: 'Dark Matter', author: 'Blake Crouch', desc: 'A mind-bending thriller about the choices we make and the different lives we could have lived.' },
  { id: '5', title: 'The Three-Body Problem', author: 'Cixin Liu', desc: 'A story of humanity’s first contact with an alien civilization during the Chinese Cultural Revolution.' }
];

const BookList = () => {
  return (
    <div className="card-box">
      <h2>Book Catalog</h2>
      {myBooks.map((book) => (
        <div key={book.id} className="book-item">
          <h3>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </h3>
          <p>By: {book.author}</p>
          <Link to={`/books/${book.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

const BookDetail = () => {
  const { id } = useParams(); 
  const book = myBooks.find((b) => b.id === id);

  if (!book) return <h2>Book not found!</h2>;

  return (
    <div className="card-box">
      <Link to="/">Back to Catalog</Link>
      <div className="cyan-box">
        <h2>{book.title}</h2>
        <h4>Author: {book.author}</h4>
        <p><strong>Description:</strong> {book.desc}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Book App</h1>
        <hr />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;