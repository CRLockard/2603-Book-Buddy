const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
const USERS_ENDPOINT = "/users/me";
const RESERVATIONS = "/reservations";
const ACCOUNT_API = API + USERS_ENDPOINT;
const RESERVATIONS_API = API + RESERVATIONS;

//takes a token and get the details of realted account
export async function getAccountdetails(token) {
  try {
    const response = await fetch(ACCOUNT_API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("The getAccountDetails API had and error", error);
    return [];
  }
}

//takes token and get associated reservations.
export async function getUserReservations(token) {
  try {
    const response = await fetch(RESERVATIONS_API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("getUserReservations RESULTS", result);
    return result;
  } catch (error) {
    console.error("The getUserDetails API had and error", error);
    return [];
  }
}
