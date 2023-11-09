import axios from "axios";
import React, { useState } from "react";
import { russo_one } from "@/utils/fonts";
import { getServerSession } from "next-auth";
import { FaPlus, FaCheck } from "react-icons/fa";
import { authOptions } from "../api/auth/[...nextauth]";
import Users from "@/utils/UserModel";
import Loader from "@/components/Loader";
import MainLayout from "@/utils/MainLayout";
import DashboardNavbar from "@/components/DashboardNavbar";
import CertificateBox from "@/components/CertificateBox";

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const username = await session.session.user.username;
  const response = await Users.findOne({ username }, "certificates");

  return {
    props: {
      username,
      certificatesArray: response.certificates,
    },
  };
}

const Certificates = ({ username, certificatesArray }) => {
  const [loading, setLoading] = useState(false);
  const [certificates, setCertificates] = useState([...certificatesArray]);
  const [currentCertificate, setCurrentCertificate] =
    useState(SampleCertificate);

  const handleSubmit = async () => {
    setLoading(true);
    if (true) {
      try {
        await axios.put("/api/edit/certificates", { username, certificates });
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  const addCertificate = () => {
    console.log(currentCertificate);
    if (true) setCertificates([...certificates, currentCertificate]);
    setCurrentCertificate(SampleCertificate);
  };

  return (
    <>
      <MainLayout>
        <div className="w-full h-full flex flex-col items-center overflow-auto">
          <DashboardNavbar username={username} />
          <section className="w-full md:3/4 lg:w-2/3 flex flex-col gap-4 px-4 py-8">
            <h1 className={`${russo_one.className} text-2xl`}>
              Edit Your Certificates
            </h1>

            <article className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full relative">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentCertificate.title}
                    onChange={(e) =>
                      setCurrentCertificate({
                        ...currentCertificate,
                        title: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="title"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Certificate Title
                  </label>
                </div>

                <div className="w-full relative">
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentCertificate.organization}
                    onChange={(e) =>
                      setCurrentCertificate({
                        ...currentCertificate,
                        organization: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="organization"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Organization
                  </label>
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full relative">
                  <input
                    type="text"
                    id="link"
                    name="link"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentCertificate.link}
                    onChange={(e) =>
                      setCurrentCertificate({
                        ...currentCertificate,
                        link: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="link"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Certificate Link
                  </label>
                </div>

                <div className="w-full relative">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentCertificate.date}
                    onChange={(e) =>
                      setCurrentCertificate({
                        ...currentCertificate,
                        date: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="skill"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Issued Date
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="p-4 rounded-md shadow-md bg-slate-900 text-white"
                  onClick={addCertificate}
                >
                  <FaPlus />
                </button>

                <button
                  type="button"
                  className="p-4 rounded-md shadow-md bg-slate-900 disabled:opacity-70 text-white"
                  disabled={loading ? true : false}
                  onClick={handleSubmit}
                >
                  {loading ? <Loader /> : <FaCheck />}
                </button>
              </div>
            </article>

            <div className="w-full flex flex-col gap-4">
              {certificates.map((certificate, index) => {
                return (
                  <CertificateBox
                    key={"certificate" + index}
                    index={index}
                    canDelete={true}
                    certificate={certificate}
                    certificates={certificates}
                    setCertificates={setCertificates}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
};

const SampleCertificate = {
  title: "",
  organization: "",
  date: "",
  link: "",
};

export default Certificates;
