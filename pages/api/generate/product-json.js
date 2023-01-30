import { serverGenerateProductJson } from "@/lib/server/cohere";
import { throwError } from "@/middlewares/throwError";

export default async function handler(req, res) {
  try {
    if (req.method == "POST") {
      const { description } = req.body
      const generation = await serverGenerateProductJson(description)
      res.status(200).json({ result: generation })
    } else {
      res.setHeader('Allow', 'POST');
      throwError(res, 405, "Method Not Allowed")
    }
  } catch (error) {
    console.log(error)
    throwError(res)
  }
}