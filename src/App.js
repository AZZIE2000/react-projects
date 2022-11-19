import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Books from "./data/books.json";
import Tasks from "./pages/Tasks";
import Weather from "./pages/Weather";
import Food from "./pages/Food";

import Meals from "./pages/Meals";
import SingleMeal from "./pages/SingleMeal";

function App() {
  const allBooks = Books.eBooks;
  const [books, setBooks] = useState(allBooks);
  const [searchBooks, setSearchBooks] = useState([]);
  const [sortBooks, setSortBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(0);

  function handleSearch(search) {
    setSearch(search);
  }
  function handleSort(sort) {
    setSort(sort);
    console.log(sort);
  }
  useEffect(() => {
    if (search != "") {
      const searchBooks = books.filter((book) => {
        return (
          book.language.toLowerCase().includes(search.toLowerCase()) ||
          book.edition.toLowerCase().includes(search.toLowerCase())
        );
      });
      setSearchBooks(searchBooks);
    } else {
      setSearchBooks(null);
    }
  }, [search]);
  // Sorting
  useEffect(() => {
    if (sort > 0) {
      const sortBooks = books.filter((book) => {
        return book.price <= sort;
      });
      setSortBooks(sortBooks);
    } else {
      setSortBooks(null);
    }
  }, [sort]);
  // console.log(sortBooks);

  return (
    <>
      <NavBar sort={sort} sortFun={handleSort} searchFun={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={<Home sort={sortBooks} search={searchBooks} books={books} />}
        />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/food" element={<Food />} />
        <Route path="/meals/:name" element={<Meals />} />
        <Route path="/meal/:id" element={<SingleMeal />} />
      </Routes>
    </>
  );
}

export default App;
