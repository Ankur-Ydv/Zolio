import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModel";

export default async function handler(req, res) {
  DbConnect().catch((error) => res.status(500).json({ error }));

  if (req.method === "PUT") {
    try {
      const { username, projects } = req.body;
      await Users.findOneAndUpdate({ username }, { projects });

      res.status(200).json({ msg: "Projects Updated" });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
