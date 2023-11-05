import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModesl";

export default async function handler(req, res) {
  DbConnect().catch((error) => res.status(500).json(error));

  if (req.method === "POST") {
    try {
      const { username } = req.body;
      const user = await Users.findOne({ username: username });

      if (!user) return res.status(200).json({ msg: "Unique Username" });

      res.status(400).json({ msg: "Username Already Exist" });
    } catch (error) {
      res.status(400).json({ msg: "Invalid Request", error });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
