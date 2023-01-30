import { generateProductDescription, serverGenerateProductDescription } from "@/lib/server/cohere";
import { throwError } from "@/middlewares/throwError";

export default async function handler(req, res) {
  console.log(req.body.product)
  try {
    if (req.method == "POST") {
      const generation = await serverGenerateProductDescription(JSON.stringify(req.body.product, null, 2))
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