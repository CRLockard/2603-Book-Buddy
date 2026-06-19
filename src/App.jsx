import BookDetails from "./Components/BookDetails";
import BookList from "./Components/BookList";
import { Route, Routes, Navigate } from "react-router";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
}
