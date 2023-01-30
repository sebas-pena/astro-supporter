"use client"
import React, { useState } from "react"
import PromptInput from "@/components/ui/prompt/Prompt"
import PromptResult from "@/components/ui/prompt/PromptResult"
import PrimaryBorderButton from "@/components/ui/button/PrimaryBorder"
import { clientGenerateAnswer } from "@/lib/client/apiClient"
import product from "@/json/product.json"
import ApiRefModal from "@/components/ui/modals/ApiRef"

const apiRefData = {
	endpoint: "/api/generate/product-json",
	method: "POST",
	body: {
		product: {
			type: "object",
			description: "JSON that describes the product.",
		},
		question: {
			type: "string",
			description: "string that represent the question.",
		},
	},
	response: {
		result: {
			type: "string",
			description: "Answer to the question.",
		},
	},
}

const AnswerPage = () => {
	const [response, setResponde] = useState({
		result: null,
		responseStatus: null,
	})
	const [question, setQuestion] = useState("")
	const [showApiRef, setShowApiRef] = useState(false)
	const { responseStatus } = response

	const handleSubmitQuestion = async (e) => {
		e.preventDefault()
		if (responseStatus == "loading" || question.length < 5) return
		setResponde({
			result: null,
			responseStatus: "loading",
		})

		const { result, error } = await clientGenerateAnswer(product, question)

		setResponde({
			result: result,
			responseStatus: error ? "error" : "successful",
		})
	}

	return (
		<>
			<div className="text-center">
				<PrimaryBorderButton onClick={() => setShowApiRef(!showApiRef)}>
					API Ref
				</PrimaryBorderButton>
			</div>
			<PromptInput
				placeholder="If i am from usa what processor does it come with?"
				onChange={setQuestion}
				onSubmit={handleSubmitQuestion}
			/>

			<PromptResult
				response={response.result}
				responseStatus={responseStatus}
				placeholder="Click on the button and let's start creating some fantastic descriptions."
			/>
			{showApiRef && (
				<ApiRefModal {...apiRefData} closeModal={() => setShowApiRef(false)} />
			)}
		</>
	)
}

export default AnswerPage
