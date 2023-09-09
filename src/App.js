import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<BookList/>} />
      <Route path='/books/:id' element={<BookDetails/>} />
      <Route path="/add-book" element={<AddBook/>}/>
      <Route path="/edit-book/:id" element={<EditBook/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
