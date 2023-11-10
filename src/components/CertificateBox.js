import React from "react";
import { motion } from "framer-motion";
import { TiDeleteOutline } from "react-icons/ti";
import { TbCertificate, TbExternalLink } from "react-icons/tb";
import Link from "next/link";

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
      x: 200,
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
        <TbCertificate className="h-full text-4xl" />

        <div className="w-full h-12 flex flex-col justify-around">
          <h3 className="text-lg md:text-xl font-bold">{certificate.title}</h3>
          <span>{`${certificate.organization}  •  ${certificate.date}`}</span>
        </div>

        <Link href={certificate.link} target="_blank">
          <TbExternalLink className="h-full text-2xl" />
        </Link>

        <TiDeleteOutline
          className={`${
            !canDelete && "hidden"
          } h-full float-right text-2xl cursor-pointer hover:text-red-800`}
          onClick={handleDelete}
        />
      </motion.article>
    </>
  );
};

export default CertificateBox;
