import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModel";
import { hash } from "bcrypt";

export default async function handler(req, res) {
  DbConnect().catch((error) => res.status(500).json(error));

  if (req.method === "POST") {
    try {
      const { fullname, email, password, username } = req.body;
      const hashedPassword = await hash(password, 10);
      const user = await Users.create({
        fullname,
        email,
        username,
        password: hashedPassword,
      });

      delete user.password;
      res.status(201).json({ user, msg: "Created Successfully" });
    } catch (error) {
      res.status(400).json({ msg: "Invalid Request", error });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
