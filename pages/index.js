import React from "react";
import { Provider } from "react-redux";
import { initStore } from "../common/store";
import LoginForm from "../Components/LoginForm";

function Index() {
  return (
    <Provider store={initStore()}>
      <LoginForm />
    </Provider>
  );
}

export default Index;
