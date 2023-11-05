import { Schema, model, models } from "mongoose";

const CertificateSchema = new Schema({
  title: String,
  organization: String,
  link: String,
  date: String,
});

const ProjectSchema = new Schema({
  title: String,
  description: String,
  link: String,
  repoLink: String,
  image: String,
});

const ProfileSchema = new Schema({
  linkedin: String,
  github: String,
  leetcode: String,
  geeksforgeeks: String,
  codechef: String,
  codeforces: String,
});

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  fullname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: String,
  resumeLink: String,
  description: String,
  profiles: {
    type: ProfileSchema,
    default: {
      linkedin: "",
      github: "",
      leetcode: "",
      geeksforgeeks: "",
      codechef: "",
      codeforces: "",
    },
  },
  skills: [String],
  projects: [ProjectSchema],
  certificates: [CertificateSchema],
});

const Users = models?.User || model("User", UserSchema);

export default Users;
