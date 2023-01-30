import React from "react"
import product from "@/json/product.json"
import ProductViewer from "@/components/ui/product/ProductViewer"

const AnswerPage = ({ children }) => {
	return (
		<section className="flex flex-col gap-4 ">
			<ProductViewer product={product} />
			{children}
		</section>
	)
}

export default AnswerPage
