import { send } from "@emailjs/browser";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";

const ConnectForm = ({ to_name, to_email }) => {
  const [emailData, setEmailData] = useState({
    from_name: "",
    to_name: to_name,
    from_email: "",
    subject: "",
    message: "",
    to_email: to_email,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (!true) {
      send(
        "service_838900p",
        "template_cw87cwq",
        emailData,
        "kEVtKCF_wQXBezs6G"
      )
        .then(() => enqueueSnackbar("Message Sent", { variant: "success" }))
        .catch(() =>
          enqueueSnackbar("Internal Server Error", { variant: "error" })
        );

      setEmailData({
        from_name: "",
        to_name: to_name,
        from_email: "",
        subject: "",
        message: "",
        to_email: to_email,
      });
    } else {
      enqueueSnackbar("All fields are required", { variant: "warning" });
    }
  };

  const handelChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        className="w-full md:w-2/3 flex flex-col gap-4 items-center"
        onSubmit={sendEmail}
      >
        <div className="w-full relative">
          <input
            type="text"
            id="from_name"
            name="from_name"
            className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={emailData.from_name}
            onChange={handelChange}
          />
          <label
            htmlFor="from_name"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Name
          </label>
        </div>

        <div className="w-full relative">
          <input
            type="email"
            id="from_email"
            name="from_email"
            className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={emailData.from_email}
            onChange={handelChange}
          />
          <label
            htmlFor="from_email"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Email
          </label>
        </div>

        <div className="w-full relative">
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={emailData.subject}
            onChange={handelChange}
          />
          <label
            htmlFor="subject"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Subject
          </label>
        </div>

        <textarea
          type="text"
          name="message"
          rows={6}
          placeholder="Enter Your Message Here"
          value={emailData.message}
          onChange={handelChange}
          className="w-full p-3 border border-slate-300 rounded-md focus:outline-slate-400"
        />

        <button className="w-24 py-2 rounded-md bg-gray-900 text-white">
          Send
        </button>
      </form>
    </>
  );
};

export default ConnectForm;
