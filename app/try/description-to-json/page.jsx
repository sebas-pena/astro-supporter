"use client"
import React, { useState } from "react"
import PrimaryButton from "@/components/ui/button/Primary"
import PromptResult from "@/components/ui/prompt/PromptResult"
import FixedPrompt from "@/components/ui/prompt/FixedPrompt"
import PrimaryBorderButton from "@/components/ui/button/PrimaryBorder"
import { clientGenerateProductJson } from "@/lib/client/apiClient"
import ApiRefModal from "@/components/ui/modals/ApiRef"

const prompt = `Introducing the Samsung Galaxy S21 Ultra 5G smartphone. This top-of-the-line device is packed with features that will take your mobile experience to the next level. The Samsung Galaxy S21 Ultra 5G is powered by the powerful Snapdragon 888 processor, ensuring that you can run multiple apps and games without any lag. The device also comes with 12GB of RAM, making it one of the most powerful smartphones on the market.
The Samsung Galaxy S21 Ultra 5G boasts an impressive camera system, featuring a 108MP primary camera, a 12MP ultra-wide camera, and a 10MP periscope telephoto camera. The camera also features 8K video recording, 8K snap and 8K time-lapse which will give you professional-quality photos and videos. The device also has a 40MP front-facing camera, perfect for taking stunning selfies.
The Samsung Galaxy S21 Ultra 5G also features an expansive 6.8-inch Dynamic AMOLED 2X display with a resolution of 3200x1440, which will give you an immersive viewing experience. The device also comes with a large 5000mAh battery, which will give you all-day battery life. The device also features 5G capabilities, allowing you to take advantage of lightning-fast download and streaming speeds.

Features:
Snapdragon 888 processor
12GB of RAM
108MP primary camera
12MP ultra-wide camera
10MP periscope telephoto camera
8K video recording, 8K snap and 8K time-lapse
40MP front-facing camera
6.8-inch Dynamic AMOLED 2X display
3200x1440 resolution
5000mAh battery
5G capabilities
`
const apiRefData = {
	endpoint: "/api/generate/product-json",
	method: "POST",
	body: {
		description: {
			type: "string",
			description: "String that describes the product.",
		},
	},
	response: {
		result: {
			type: "object",
			description: "JSON object that represents a product.",
		},
	},
}

const page = () => {
	const [response, setResponde] = useState({
		result: null,
		responseStatus: null,
		isJSON: false,
	})
	const [showApiRef, setShowApiRef] = useState(false)
	const { responseStatus } = response

	const handleGenerateJson = async () => {
		if (responseStatus == "loading") return
		setResponde({
			result: null,
			responseStatus: "loading",
		})
		const { result, error } = await clientGenerateProductJson(prompt)
		if (error) {
			setResponde({
				result: result,
				responseStatus: "error",
			})
		} else {
			try {
				const parsedResult = JSON.parse(result)
				setResponde({
					result: parsedResult,
					responseStatus: "successful",
					isJSON: true,
				})
			} catch (e) {
				setResponde({
					result: result,
					responseStatus: "successful",
					isJSON: false,
				})
			}
		}
	}

	return (
		<>
			<section className="flex flex-col gap-4 pt-4">
				<FixedPrompt prompt={prompt} title="Sample Description" />
				<div className="flex justify-center gap-4">
					<PrimaryButton onClick={handleGenerateJson}>
						Generate JSON
					</PrimaryButton>
					<PrimaryBorderButton onClick={() => setShowApiRef(!showApiRef)}>
						API Ref
					</PrimaryBorderButton>
				</div>
				<PromptResult
					isJSON={response.isJSON}
					response={response.result}
					responseStatus={responseStatus}
					placeholder="Click on the button and let's turn the description into a structured data format that is easy to read and manipulate."
					experimental
				/>
			</section>
			{showApiRef && (
				<ApiRefModal {...apiRefData} closeModal={() => setShowApiRef(false)} />
			)}
		</>
	)
}

export default page
