import BookDetails from "./Components/BookDetails";
import BookList from "./Components/BookList";
import { Route, Routes, Navigate } from "react-router";
import Login from "./Components/login";
import Register from "./Components/Register";
import Account from "./Components/Account";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}
