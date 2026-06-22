const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
const RESERVATIONS = "/reservations";
const RESERVATIONS_API = API + RESERVATIONS;

export async function reserveBook(token, bookId) {
  try {
    const response = await fetch(RESERVATIONS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ bookId: bookId }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw Error(result.message);
    }
    return result;
  } catch (error) {
    console.error("There was an error in reserveBook", error);
  }
}

export async function returnBook(token, reservationId) {
  try {
    const response = await fetch(`${RESERVATIONS_API}/${reservationId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const result = await response.json();
      throw Error(result.message);
    }
    return true;
  } catch (error) {
    console.error("There was an error in returnBook", error);
  }
}
