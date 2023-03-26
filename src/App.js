import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import TypingBox from "./Components/TypingBox";
import { GlobalStyles } from "./Styles/global";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="canvas">
        <GlobalStyles />
        <Header />
        <TypingBox />
        <div>Footer</div>
      </div>
    </>
  );
};

export default App;
