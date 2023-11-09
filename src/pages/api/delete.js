import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModel";

export default async function handler(req, res) {
  DbConnect()
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));

  if (req.method === "PATCH") {
    try {
      const { username } = req.body;
      await Users.findOneAndDelete({ username });

      res.status(200).json({ msg: "Deleted Successfully" });
    } catch (error) {}
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
