import React, { useState ,useEffect} from "react";
import axios from "axios";
import { API_URL } from "../Api";
import { Link, useNavigate ,useParams} from "react-router-dom";
import "./AddBook.css"; // Import the CSS file

function EditBook() {
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    image_url: "",
    description: "",
    genres: "",
  });

  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        setBookData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios
      .put(`${API_URL}/${id}`, bookData)
      .then((res) => {
        console.log("Book updated successfully:", res.data);
        navigate("/", { state: { updatedBook: res.data } });
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

export default EditBook;
