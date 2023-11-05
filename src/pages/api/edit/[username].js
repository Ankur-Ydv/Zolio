import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModesl";

export default async function handler(req, res) {
  DbConnect().catch((error) => res.status(500).json(error));

  if (req.method === "PUT") {
    try {
      const values = req.body;
      const user = await Users.findOneAndUpdate(
        { username: req.query.username },
        values,
        {
          new: true,
        }
      );

      if (!user) return res.status(401).json({ msg: "Invalid Credentials" });

      res.status(200).json({ msg: "Edited Successfully" });
    } catch (error) {
      res.status(400).json({ msg: "Invalid Request", error });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
