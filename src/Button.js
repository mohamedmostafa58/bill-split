import React from "react";

const Button = ({ children, className, handleclick }) => {
  return (
    <button
      className={`buttn ${className}`}
      onClick={() => {
        handleclick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
