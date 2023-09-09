// import React from 'react'
// import '../App'
// function Navbar() {
//   return (
//     <div className='navbar'>
//        <div><h1>React js Books APP</h1></div>      
//     </div>
//   )
// }

// export default Navbar




import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/add-book">Add Book</Link> {/* Move the Add Book link here */}
    </div>
  );
}

export default Navbar;
