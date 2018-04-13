import 'isomorphic-fetch';

const requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const ENV = process.env.NODE_ENV || 'production';
const SERVER_PATH =
  ENV === 'development'
    ? 'http://localhost:8000'
    : 'http://jayco-env.fcpf32k7de.us-east-2.elasticbeanstalk.com';

export const getAllComments = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/comments`, options);
};

export const saveComment = ({ postId, content }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ postId, content }),
  };

  return fetch(`${SERVER_PATH}/api/comments`, options);
};

export const saveReply = ({ postId, commentId, content }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ postId, commentId, content }),
  };

  return fetch(`${SERVER_PATH}/api/comments`, options);
};

export const updateComment = ({ postId, commentId, content }) => {
  const options = {
    method: 'PUT',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ commentId, content }),
  };

  return fetch(
    `${SERVER_PATH}/api/posts/${postId}/comments/${commentId}`,
    options,
  );
};

export const deleteComment = ({ postId, commentId }) => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(
    `${SERVER_PATH}/api/posts/${postId}/comments/${commentId}`,
    options,
  );
};

export const getAllPosts = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/posts`, options);
};

export const getPostById = (id) => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/posts/${id}`, options);
};

export const deletePost = (id) => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/posts/${id}`, options);
};

export const updatePost = ({ content, title, postId }) => {
  const options = {
    method: 'PUT',
    credentials: 'include',
    headers: requestHeaders,
    body: JSON.stringify({ content, title }),
  };

  return fetch(`${SERVER_PATH}/api/posts/${postId}`, options);
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

export const getAllPortfolios = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/portfolios`, options);
};

export const getPortfolioById = (id) => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/portfolios/${id}`, options);
};

export const deletePortfolio = (id) => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/portfolios/${id}`, options);
};

export const updatePortfolio = ({
  description,
  title,
  portfolioId,
  img,
  link,
}) => {
  const options = {
    method: 'PUT',
    credentials: 'include',
    headers: requestHeaders,
    body: JSON.stringify({ description, title, img, link }),
  };

  return fetch(`${SERVER_PATH}/api/portfolios/${portfolioId}`, options);
};

export const savePortfolio = ({ description, title, img, link }) => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
    body: JSON.stringify({ description, title, img, link }),
  };

  return fetch(`${SERVER_PATH}/api/portfolios`, options);
};

export const deleteViewer = () => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/viewer/delete`, options);
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

export const logout = () => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
  };

  return fetch(`${SERVER_PATH}/api/logout`, options);
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
