const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
const bookEndpoint = "/books";
const bookAPI = API + bookEndpoint;

// this call should get the list of all books and their details
export async function getAllBooks() {
  try {
    const response = await fetch(bookAPI);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("The getAllBooks API had and error", error);
    return [];
  }
}

//This should get specific details of just one book.
export async function getBook(id) {
  try {
    const response = await fetch(`${bookAPI}/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("The getBook API had and error", error);
    return [];
  }
}
