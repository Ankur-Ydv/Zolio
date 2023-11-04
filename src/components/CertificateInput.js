import React, { useState } from "react";

const CertificateInput = ({ certificates, setCertificates }) => {
  const [currentCertificate, setCurrentCertificate] = useState({
    title: "",
    organization: "",
    date: "",
  });

  const addCertificate = () => {
    if (
      currentCertificate.title !== "" &&
      currentCertificate.organization !== "" &&
      currentCertificate.date !== ""
    ) {
      setCertificates([...certificates, currentCertificate]);
    }
  };

  return (
    <>
      <article className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-8">
          <input
            type="text"
            name="title"
            placeholder="Certificate Title"
            className="w-full p-2"
            onChange={(e) =>
              setCurrentCertificate({
                ...currentCertificate,
                title: e.target.value,
              })
            }
          />
          <input
            type="text"
            name="organization"
            placeholder="Organization"
            className="w-full p-2"
            onChange={(e) =>
              setCurrentCertificate({
                ...currentCertificate,
                organization: e.target.value,
              })
            }
          />
          <input
            type="text"
            name="date"
            placeholder="Format(Date Month Year)"
            className="w-full p-2"
            onChange={(e) =>
              setCurrentCertificate({
                ...currentCertificate,
                date: e.target.value,
              })
            }
          />
        </div>

        <button
          type="button"
          className="w-fit px-8 py-2 rounded-md shadow-md bg-slate-950 text-white"
          onClick={addCertificate}
        >
          Add New Certificate
        </button>
      </article>
    </>
  );
};

export default CertificateInput;
