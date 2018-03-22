import * as HTTP from "./http";

const exception = error => {
  throw new Error(error);
};

const redirect = route => {
  window.location.href = route;
};

export const viewerAuthenticated = viewer => {
  return {
    type: "VIEWER_AUTHENTICATED",
    isAuthenticated: true,
    viewer
  };
};

export const requestSavePost = data => {
  return async dispatch => {
    const response = await HTTP.savePost(data);

    if (response.status === 200) {
      return redirect("/");
    }

    if (response.status === 403) {
      return dispatch(requestLogout());
    }

    return exception("error");
  };
};

export const requestLogin = data => {
  return async dispatch => {
    const response = await HTTP.login(data);

    if (response.status !== 200) {
      return exception("error");
    }

    return redirect("/");
  };
};

export const requestSignup = data => {
  console.log(HTTP);
  return async dispatch => {
    const response = await HTTP.signup(data);

    if (response.status !== 200) {
      return exception("error");
    }

    return redirect("/");
  };
};
