import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../Api";
import "../App.css";

function BookList() {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (location.state && location.state.newBook) {
      setBooks((prevBooks) => [...prevBooks, location.state.newBook]);
    }
  }, [location.state]);

  const deleteBook = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          alert("Book not found. It may have already been deleted.");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="book-list">
      <h1>Book Inventory</h1>
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
            <p>Author: {book.author}</p>
          </div>
          <div>
            <img src={book.image_url} alt="#" />
          </div>
          <Link to={`/edit-book/${book.id}`}>Edit</Link>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
          <Link to={`/books/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default BookList;
