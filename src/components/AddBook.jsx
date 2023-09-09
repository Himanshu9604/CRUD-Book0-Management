import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../Api";
import { Link, useNavigate } from "react-router-dom";
import "./AddBook.css"; // Import the CSS file

function AddBook() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    image_url: "",
    description: "",
    genres: "",
  });

  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios
      .post(API_URL, bookData)
      .then((res) => {
        console.log("Book added successfully:", res.data);
        setBookData({
          title: "",
          author: "",
          image_url: "",
          description: "",
          genres: "",
        });

        // Pass the newly added book data to the BookList component
        navigate("/", { state: { newBook: res.data } });
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="edit-book-container">
  <h1>Edit Book</h1>
  <form>
    <div className="form-group">
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={bookData.title}
        onChange={handleChange}
        className="input-field"
      />
    </div>
    <div className="form-group">
      <label>Author</label>
      <input
        type="text"
        name="author"
        value={bookData.author}
        onChange={handleChange}
        className="input-field"
      />
    </div>
    <div className="form-group">
      <label>Image URL</label>
      <input
        type="text"
        name="image_url"
        value={bookData.image_url}
        onChange={handleChange}
        className="input-field"
      />
    </div>
    <div className="form-group">
      <label>Description</label>
      <textarea
        name="description"
        value={bookData.description}
        onChange={handleChange}
        className="textarea-field"
      ></textarea>
    </div>
    <div className="form-group">
      <label>Genres</label>
      <input
        type="text"
        name="genres"
        value={bookData.genres}
        onChange={handleChange}
        className="input-field"
      />
    </div>
    <button type="button" onClick={handleUpdate} className="update-button">
      Update
    </button>
    <Link to="/" className="cancel-link">
      Cancel
    </Link>
  </form>
</div>

  );
}

export default AddBook;
