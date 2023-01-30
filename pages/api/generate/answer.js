import { generateAnswer, serverGenerateAnswer } from "@/lib/server/cohere";
import { throwError } from "@/middlewares/throwError";

export default async function handler(req, res) {
  try {
    if (req.method == "POST") {
      const { product, question } = req.body
      const result = await serverGenerateAnswer(JSON.stringify(product, null, 2), question)
      res.status(200).json({ result })
    } else {
      res.setHeader('Allow', 'POST');
      throwError(res, 405, "Method Not Allowed")
    }
  } catch (error) {
    console.log(error)
    throwError(res)
  }
}