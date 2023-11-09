import { Schema, model, models } from "mongoose";

const CertificateSchema = new Schema({
  title: {
    type: String,
    default: "",
  },
  organization: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
});

const ProjectSchema = new Schema({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  repoLink: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
});

const ProfileSchema = new Schema({
  linkedin: {
    type: String,
    default: "",
  },
  github: {
    type: String,
    default: "",
  },
  leetcode: {
    type: String,
    default: "",
  },
  geeksforgeeks: {
    type: String,
    default: "",
  },
  codechef: {
    type: String,
    default: "",
  },
  codeforces: {
    type: String,
    default: "",
  },
});

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  fullname: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  resume: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  profiles: ProfileSchema,
  skills: [String],
  projects: [ProjectSchema],
  certificates: [CertificateSchema],
});

const Users = models?.User || model("User", UserSchema);

export default Users;
