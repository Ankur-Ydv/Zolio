import React from "react";
import { motion } from "framer-motion";

const ConnectForm = () => {
  const formIntro = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <motion.form
        className="w-2/3 flex flex-col gap-4 items-center"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={formIntro}
        action="#"
      >
        <div className="w-full flex gap-4">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="w-full p-3 border border-slate-300 rounded-md focus:outline-slate-400"
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="w-full p-3 border border-slate-300 rounded-md focus:outline-slate-400"
          />
        </div>

        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-slate-300 rounded-md focus:outline-slate-400"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full p-3 border border-slate-300 rounded-md focus:outline-slate-400"
        />

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
      </motion.form>
    </>
  );
};

export default ConnectForm;
