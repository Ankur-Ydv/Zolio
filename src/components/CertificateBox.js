import React from "react";
import { motion } from "framer-motion";
import { TiDeleteOutline } from "react-icons/ti";

const CertificateBox = ({
  index,
  canDelete,
  certificate,
  certificates,
  setCertificates,
}) => {
  const certificateIntro = {
    hide: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const handleDelete = () => {
    setCertificates(certificates.filter((certificate, ind) => index !== ind));
  };

  return (
    <>
      <motion.article
        className="w-full flex p-4 gap-4 border border-slate-700 bg-gray-50 shadow-md rounded-md"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={certificateIntro}
      >
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="certificate"
          width="75"
          height="75"
          className="object-cover"
        />
        <div className="w-full h-12 flex flex-col justify-around">
          <h1 className="text-xl font-bold">{certificate.title}</h1>
          <div>
            <span>{`${certificate.organization} • `}</span>
            <span>{certificate.date}</span>
          </div>
        </div>
        <TiDeleteOutline
          className={`${
            !canDelete && "hidden"
          } float-right text-2xl cursor-pointer hover:text-red-800`}
          onClick={handleDelete}
        />
      </motion.article>
    </>
  );
};

export default CertificateBox;
