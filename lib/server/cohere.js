import { generateAnswerPrompt, generateProductDescriptionPrompt, generateProductJsonPrompt } from "./prompts"

const headers = {
  "Content-Type": "application/json",
  "Cohere-Version": "2022-12-06",
  "Authorization": `BEARER ${process.env.COHERE_KEY}`
}

export const serverGenerateProductDescription = async (product) => {
  const res = await fetch("https://api.cohere.ai/generate", {
    method: "POST",
    headers,
    body: JSON.stringify(
      {
        "model": "command-xlarge-nightly",
        "prompt": `${generateProductDescriptionPrompt(product)}`,
        "max_tokens": 400,
        "temperature": 2,
        "k": 0,
        "p": 0.75,
        "frequency_penalty": 0.1,
        "presence_penalty": 0,
        "stop_sequences": [],
        "return_likelihoods": "NONE"
      }
    )
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error({ status: res.status, res: data })
  }
  const result = data.generations[0].text
  return result.split("--")[0]
}

export const serverGenerateAnswer = async (productJson, question) => {
  const res = await fetch("https://api.cohere.ai/generate", {
    method: "POST",
    headers,
    body: JSON.stringify(
      {
        "model": "command-xlarge-nightly",
        "prompt": `${generateAnswerPrompt(productJson, question)}`,
        "max_tokens": 300,
        "temperature": 2,
        "k": 0,
        "p": 0.75,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "stop_sequences": [],
        "return_likelihoods": "NONE"
      }
    )
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error({ status: res.status, res: data })
  }
  return data.generations[0].text
}

export const serverGenerateProductJson = async (productDescription) => {
  const res = await fetch("https://api.cohere.ai/generate", {
    method: "POST",
    headers,
    body: JSON.stringify(
      {
        "model": "xlarge",
        "prompt": `${generateProductJsonPrompt(productDescription)}`,
        "max_tokens": 900,
        "temperature": 2,
        "k": 0,
        "p": 0.75,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "stop_sequences": [],
        "return_likelihoods": "NONE"
      }
    )
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error({ status: res.status, res: data })
  }
  const result = data.generations[0].text.split("--")[0]
  return result.slice(0, result.lastIndexOf("}") + 1)
}