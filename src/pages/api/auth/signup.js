import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModel";
import { hash } from "bcrypt";

export default async function handler(req, res) {
  DbConnect().catch(() =>
    res.status(500).json({ msg: "Internal Server Error" })
  );

  if (req.method === "POST") {
    try {
      const { fullname, email, password, username } = req.body;
      const isUser = await Users.findOne({ $or: [{ username }, { email }] });
      if (isUser) return res.status(400).json({ msg: "Invalid Credentials" });

      const hashedPassword = await hash(password, 10);
      const user = await Users.create({
        fullname,
        email,
        username,
        password: hashedPassword,
      });

      delete user.password;
      res.status(201).json({ msg: "Created Successfully" });
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Server", error });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
