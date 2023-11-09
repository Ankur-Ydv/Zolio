import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModel";

export default async function handler(req, res) {
  DbConnect()
    .then(() => console.log("DB Connected"))
    .catch((error) => res.status(500).json({ error }));

  if (req.method === "PATCH") {
    const { username, fullname, email, title, resume, description } = req.body;
    await Users.findOneAndUpdate(
      { username },
      { fullname, title, email, resume, description }
    );

    res.status(200).json({ msg: "Bio Updated" });
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
