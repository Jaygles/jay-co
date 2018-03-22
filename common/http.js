import 'isomorphic-fetch';

const requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const ENV = process.env.NODE_ENV || 'development';
const SERVER_PATH = ENV === 'development' ? 'http://localhost:8000' : '';

export const getAllPosts = () => {
  console.log('posts');
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/posts`, options);
};

export const getPostById = id => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/posts/${id}`, options);
};

export const savePost = ({ content, title }) => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
    body: JSON.stringify({ content, title }),
  };

  return fetch(`${SERVER_PATH}/api/posts`, options);
};

export const getAllUsers = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/users`, options);
};

export const login = ({ username, password }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ username: username.toLowerCase(), password }),
  };

  return fetch(`${SERVER_PATH}/api/login`, options);
};

export const signup = ({ username, password, verify }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({
      username: username.toLowerCase(),
      password,
      verify,
    }),
  };

  return fetch(`${SERVER_PATH}/api/signup`, options);
};
