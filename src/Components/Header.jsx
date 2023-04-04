import React from "react";
import AccountCircle from "./AccountCircle";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          width="50px"
          src="https://play-lh.googleusercontent.com/uE-rLPFKIsgq4LWhHBOtkvHimgP8v-nKuqMsEZ4QRr4KZLUkJdJpXi5zx09s1YnsHw"
          alt="Logo"
        />
      </div>
      <div className="user-btn">
        <AccountCircle />
      </div>
    </div>
  );
};

export default Header;
