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

const ExperienceSchema = new Schema({
  organization: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "",
  },
  startDate: {
    type: String,
    default: "",
  },
  endDate: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
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
  experiences: [ExperienceSchema],
});

const Users = models?.User || model("User", UserSchema);

export default Users;
