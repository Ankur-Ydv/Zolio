import React, { useState } from "react";

const SkillInput = ({ skills, setSkills }) => {
  const [currentSkill, setCurrentSkill] = useState("");

  const addSkill = () => {
    setSkills([...skills, currentSkill]);
  };

  return (
    <>
      <div className="w-full flex gap-8">
        <input
          type="text"
          name="skill"
          required={true}
          placeholder="Enter Your Skill Here"
          className="w-1/2 p-2"
          onChange={(e) => setCurrentSkill(e.target.value)}
        />
        <button
          type="button"
          className="w-fit px-8 py-2 rounded-md shadow-md bg-slate-950 text-white"
          onClick={addSkill}
        >
          Add New Skill
        </button>
      </div>
    </>
  );
};

export default SkillInput;
