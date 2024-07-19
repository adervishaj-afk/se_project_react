const BASE_URL = "http://localhost:3001";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getItems = () => {
  return fetch(`${BASE_URL}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleServerResponse);
};

const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
    Authorization: `Bearer ${token}`,
  }).then(handleServerResponse);
};

const removeItem = (id) => {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    Authorization: `Bearer ${token}`,
  }).then(handleServerResponse);
};

const signup = (name, avatar, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(handleServerResponse);
};

const signin = (email, password) => {
  // A POST request is sent to /auth/local.
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // The parameters are wrapped in an object, converted to a JSON
    // string, and sent in the body of the request.
    body: JSON.stringify({ email, password }),
  }).then(handleServerResponse);
};

const getUserInfo = (token) => {
  // Send a GET request to /users/me
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Specify an authorization header with an appropriately
      // formatted value.
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

const addCardLike = ({ id, token }) => {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

const removeCardLike = ({ id, token }) => {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const api = {
  getItems,
  addItem,
  removeItem,
  signup,
  signin,
  getUserInfo,
  addCardLike,
  removeCardLike,
};
