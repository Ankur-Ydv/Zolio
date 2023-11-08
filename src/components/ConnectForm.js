import React from "react";
import InputBox from "./InputBox";

const ConnectForm = () => {
  return (
    <>
      <form
        className="w-full md:w-2/3 flex flex-col gap-4 items-center"
        action="#"
      >
        <div className="w-full flex gap-4">
          <InputBox
            type={"text"}
            label={"First Name"}
            id={"firstname"}
            style={""}
          />

          <InputBox
            type={"text"}
            label={"Last Name"}
            id={"lastname"}
            style={""}
          />
        </div>

        <InputBox type={"email"} label={"Email"} id={"email"} style={""} />

        <InputBox type={"text"} label={"Subject"} id={"subjetc"} style={""} />

        <textarea
          type="text"
          name="message"
          rows={6}
          placeholder="Enter Your Message Here"
          className="w-full p-3 border border-slate-300 rounded-md focus:outline-slate-400"
        />

        <button className="w-24 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-white">
          Send
        </button>
      </form>
    </>
  );
};

export default ConnectForm;
