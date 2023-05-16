import "./App.css";
import {  useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [book, setBook] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "",
  });

  // run getBooks on page load
useEffect(() => {
  getBook();
  }, []);
  
  async function getBook() {
    const API = "http://localhost:8086/books";
    const res = await axios.get(API);
    setBook(res.data);
  }

  async function deleteBooks(id) {
    const API = `http://localhost:8086/books/${id}`;
    await axios.delete(API);
    getBook();
  }


  async function postBook(event) {
    event.preventDefault();
    const API = "http:/localhost:8086/books";
    await axios.post(API, form);
    getBook();
    setForm({
      name: "",
    description: "",
    status: "",
    });
  }
  
  function handleChange(event ) {
    setForm({...form, [event.target.name]: event.target.value });
  }
  
  return (
    <div className="App">
     <h1>Book Test </h1>
     <form onSubmit={postBook} >
      <input name="name" placeholder="name" onChange={handleChange} value={form.name} />
      <input name="description" placeholder="description" onChange={handleChange} value={form.description} />
      <input name="status" placeholder="status" onChange={handleChange} value={form.status} />
      <input type="submit" />
        </form>
        <br />
        <br />
        <div className="book-wrap">
     {book.map((book) => {
      return (
            <div>
              <h3>{book.name}</h3>
              <p>{book.description}</p>
              <p>{book.status}</p>
              <button onClick={() => deleteBooks(book._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;