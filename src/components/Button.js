import React from "react";

const Button = ({ text, type }) => {
  return (
    <>
      <button
        type={type}
        className="w-fit px-8 py-2 rounded-md shadow-md bg-slate-950 text-white"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
