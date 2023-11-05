import React, { useState } from "react";
import axios from "axios";

const ValidateUsername = ({ valid, setValid, username, setUsername }) => {
  const handleSubmit = async () => {
    try {
      await axios.post("/api/validate/username", { username });
      setValid(true);
    } catch (error) {
      setValid(false);
    }
  };

  return (
    <>
      <article className="w-full flex flex-col items-center gap-2">
        <div className="w-1/2 flex gap-4">
          <input
            type="text"
            name="username"
            className="w-full p-2"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="button"
            className="py-2 px-4 bg-black text-white rounded-md"
            onClick={handleSubmit}
          >
            Validate
          </button>
        </div>
        {valid ? (
          <p className="text-green-700 text-sm">This Username is Unique</p>
        ) : (
          <p className="text-red-700 text-sm">Choose a Unique Username</p>
        )}
      </article>
    </>
  );
};

export default ValidateUsername;
