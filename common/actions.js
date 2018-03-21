import * as HTTP from "./http";

const exception = error => {
  throw new Error(error);
};

const redirect = route => {
  window.location.href = route;
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
