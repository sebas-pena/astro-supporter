"use client"
import React, { useState } from "react"
import PrimaryButton from "@/components/ui/button/Primary"
import PromptResult from "@/components/ui/prompt/PromptResult"
import PrimaryBorderButton from "@/components/ui/button/PrimaryBorder"
import product from "@/json/product.json"
import ApiRefModal from "@/components/ui/modals/ApiRef"
import { serverGenerateProductDescription } from "@/lib/server/cohere"

const apiRefData = {
	endpoint: "/api/generate/product-json",
	method: "POST",
	body: {
		product: {
			type: "object",
			description: "JSON that describes the product.",
		},
	},
	response: {
		result: {
			type: "string",
			description: "String that represents a product description.",
		},
	},
}

const AnswerPage = () => {
	const [response, setResponde] = useState({
		result: null,
		responseStatus: null,
	})
	const [showApiRef, setShowApiRef] = useState(false)
	const { responseStatus } = response

	const handleGenerateDescription = async () => {
		if (responseStatus == "loading") return
		setResponde({
			result: null,
			responseStatus: "loading",
		})
		try {
			const result = await serverGenerateProductDescription(
				JSON.stringify(product, null, 2)
			)
			setResponde({
				result: result,
				responseStatus: "successful",
				isJSON: true,
			})
		} catch (error) {
			setResponde({
				result:
					"Oops! It seems something went wrong while generating your product description. Don't worry, I'm on it! Please try again later.",
				responseStatus: "error",
			})
		}
	}

	return (
		<>
			<div className="flex justify-center gap-4">
				<PrimaryButton onClick={handleGenerateDescription}>
					Generate Description
				</PrimaryButton>
				<PrimaryBorderButton onClick={() => setShowApiRef(!showApiRef)}>
					API Ref
				</PrimaryBorderButton>
			</div>

			<PromptResult
				experimental
				response={response.result}
				responseStatus={responseStatus}
				placeholder="Let's begin crafting captivating descriptions by clicking on the button."
			/>
			{showApiRef && (
				<ApiRefModal {...apiRefData} closeModal={() => setShowApiRef(false)} />
			)}
		</>
	)
}
