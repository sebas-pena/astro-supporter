const fetchApi = (endpoint, body) => fetch(`/api/${endpoint}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(
    body
  ),
})

export const clientGenerateDescription = async (product) => {
  const res = await fetchApi("generate/product-description", { product })
  const { result } = await res.json()

  if (res.ok) return { error: false, result }
  else return { error: true, result: "Oops! It seems something went wrong while generating your product description. Don't worry, I'm on it! Please try again later." }
}

export const clientGenerateAnswer = async (product, question) => {
  const res = await fetchApi("generate/answer", { product, question })
  const { result } = await res.json()

  if (res.ok) return { error: false, result }
  else return { error: true, result: "Oops! It seems something went wrong while generating your answer. Don't worry, I'm on it! Please try again later." }
}

export const clientGenerateProductJson = async (description) => {
  const res = await fetchApi("generate/product-json", { description })
  const { result } = await res.json()
  if (res.ok) return { error: false, result }
  else return { error: true, result: "Oops! It seems something went wrong while generating your product json. Don't worry, I'm on it! Please try again later." }
}