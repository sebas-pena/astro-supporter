import Card from "@/components/ui/Card"
import React from "react"

const options = [
	{
		title: "AI-Powered Product Description Generator",
		description:
			"Our AI-powered product description generator takes the technical details of a product in JSON format and transforms them into a compelling and easy-to-understand description. With natural language processing and machine learning, it can highlight the most important features and benefits of the product, making it perfect for e-commerce websites, product listings, and marketing materials.",
		route: "try/json-to-description",
	},
	{
		title: "Overloaded with customer service?",
		description:
			"Answer your customers' questions accurately and quickly thanks to AI, improving user experience and customer satisfaction.",
		route: "try/answer",
	},
	{
		title: "AI-Assisted JSON Creation for Product Descriptions",
		description:
			"Transform your product descriptions into structured JSON data with the help of AI. Our intuitive tool accurately extracts key information and organizes it in a user-friendly format, making it perfect for e-commerce websites and inventory management systems.",
		route: "try/description-to-json",
	},
]

const DiscoverPage = () => {
	return (
		<section className="h-full flex flex-col font-semibold items-center gap-2 py-4 px-2 ">
			<h2 className="text-2xl text-slate-800">Choose and discover</h2>
			<ul className="flex flex-col gap-4 py-3 list-none">
				{options.map((option) => (
					<li>
						<Card key={option.route} {...option} />
					</li>
				))}
			</ul>
		</section>
	)
}

export default DiscoverPage
