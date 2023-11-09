import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModel";

export default async function handler(req, res) {
  DbConnect()
    .then(() => console.log("DB Connected"))
    .catch((error) => res.status(500).json({ error }));

  if (req.method === "DELETE") {
    try {
      const { username } = req.query;
      await Users.findOneAndDelete({ username });

      res.status(200).json({ username, msg: "Deleted Successfully" });
    } catch (error) {}
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
