import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModel";

export default async function handler(req, res) {
  DbConnect()
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));

  if (req.method === "PUT") {
    const user = await Users.findOneAndUpdate();
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
