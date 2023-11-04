export const handleValidation = ({
  fullname,
  password,
  confirmPassword,
  resumeLink,
  description,
}) => {
  if (fullname.length <= 3 && fullname.length > 20) {
    return { status: false, msg: "Invalid Full Name" };
  } else if (password.length < 8 && password.length > 20) {
    return { status: false, msg: "Password is Too Short" };
  } else if (password !== confirmPassword) {
    return { status: false, msg: "Password doesn't Match" };
  } else if (description.length > 250) {
    return { status: false, msg: "Describe in less than 250 Characters" };
  } else if (resumeLink.length > 200) {
    return { status: false, msg: "Invalid Resume URL" };
  }
  return { status: true, msg: "Successfull" };
};

export const addProject = (
  projects,
  setProjects,
  currentProject,
  setCurrentProject
) => {
  if (currentProject !== null) {
    setProjects([...projects, currentProject]);
    setCurrentProject(null);
  }
};

export const addCertificate = (
  certificates,
  setCertificates,
  currentCertificate,
  setCurrentCertificate
) => {
  if (currentCertificate !== null) {
    setCertificates([...certificates, currentCertificate]);
    setCurrentCertificate(null);
  }
};
