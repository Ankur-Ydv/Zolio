import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModel";

export default async function handler(req, res) {
  DbConnect().catch((error) => res.status(500).json({ error }));

  if (req.method === "DELETE") {
    try {
      await Users.findOneAndDelete({ username: req.queryusername });

      res.status(200).json({ username, msg: "Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
