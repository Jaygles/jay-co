import "isomorphic-fetch";

const requestHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const ENV = process.env.NODE_ENV || "development";
const SERVER_PATH =
  ENV === "development"
    ? "http://localhost:8000"
    : "https://next-postgres.herokuapp.com";

export const signup = ({ username, password, verify }) => {
  const options = {
    method: "POST",
    headers: requestHeaders,
    credentials: "include",
    body: JSON.stringify({
      username: username.toLowerCase(),
      password,
      verify
    })
  };

  return fetch(`${SERVER_PATH}/api/signup`, options);
};
