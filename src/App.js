import React from "react";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
