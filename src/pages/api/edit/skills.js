import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModel";

export default async function handler(req, res) {
  DbConnect().catch((error) => res.status(500).json({ error }));

  if (req.method === "PUT") {
    try {
      const { username, skills } = req.body;
      await Users.findOneAndUpdate({ username }, { skills });

      res.status(200).json({ msg: "Skills Updated" });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
