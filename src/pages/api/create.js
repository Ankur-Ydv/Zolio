import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModesl";

export default async function handler(req, res) {
  DbConnect().catch((error) => res.status(500).json(error));

  if (req.method === "POST") {
    try {
      const userData = req.body;
      const user = await Users.create(userData);

      res.status(201).json({ user, msg: "Created Successfully" });
    } catch (error) {
      res.status(400).json({ msg: "Invalid Request", error });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
