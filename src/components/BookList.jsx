// // import React, { useEffect, useState } from "react";
// // import { API_URL } from "../Api";
// // import axios from "axios";
// // import '../App.css'
// // import { useNavigate } from "react-router-dom";
// // function BookList() {
// //   const [books, setBooks] = useState([]);
// // const navigate=useNavigate();
// //   useEffect(() => {
// //     axios
// //       .get(API_URL)
// //       .then((res) => {
// //         console.log(res.data);
// //         setBooks(res.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);

// //   return (
// //     <div className="book-list">
// //       {books.map((book) => (
// //         <div key={book.id} className="book">
// //           <div>
// //             <h4>{book.title}</h4>
// //           </div>
// //           <div>
// //             <img src={book.image_url} alt="#" onClick={()=>navigate(`/books/${book.id}`)}/>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default BookList;















// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "../Api";
// import "../App.css";

// function BookList() {
//   const [books, setBooks] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((res) => {
//         console.log(res.data);
//         setBooks(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []); // Fetch book list initially

//   useEffect(() => {
//     // Check if a new book is received in props
//     if (location.state && location.state.newBook) {
//       // Update the book list with the new book
//       setBooks((prevBooks) => [...prevBooks, location.state.newBook]);
//     }
//   }, [location.state]);

//   const deleteBook = (id) => {
//     axios
//       .delete(`${API_URL}/${id}`)
//       .then(() => {
//         // Refresh the book list after successful deletion
//         setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="book-list">
//       <h1>Book Inventory</h1>
//            {books.map((book) => (
//         <div key={book.id} className="book">
//           <div>
//             <h4>{book.title}</h4>
//             <p>Author: {book.author}</p>
//           </div>
//           <div>
//             <img src={book.image_url} alt="#" />
//           </div>
//           <Link to={`/edit-book/${book.id}`}>Edit</Link>
//           <button onClick={() => deleteBook(book.id)}>Delete</button>
//           <Link to={`/books/${book.id}`}>View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BookList;




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
  }, []); // Fetch book list initially

  useEffect(() => {
    // Check if a new book is received in props
    if (location.state && location.state.newBook) {
      // Update the book list with the new book
      setBooks((prevBooks) => [...prevBooks, location.state.newBook]);
    }
  }, [location.state]);

  const deleteBook = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        // Refresh the book list after successful deletion
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      })
      .catch((err) => console.log(err));
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