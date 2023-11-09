import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModel";

export default async function handler(req, res) {
  DbConnect()
    .then(() => console.log("DB Connected"))
    .catch((error) => res.status(500).json({ error }));

  if (req.method === "PUT") {
    const { username, skills } = req.body;
    await Users.findOneAndUpdate({ username }, { skills });

    res.status(200).json({ msg: "Skills Updated" });
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
