"use client"
import React, { useState } from "react"
import CopyButton from "../button/Copy"
import ProductCard from "./ProductCard"
import ProductJSON from "./ProductJSON"

const ProductViewer = ({ product }) => {
	const [fixJSON, setFixJSON] = useState(false)
	const handleFixJson = () => {
		setFixJSON((state) => !state)
	}
	return (
		<div>
			<div className="flex gap-4 my-3 justify-center items-center ">
				<h3 className="text-xl font-semibold">Sample Product</h3>
				<CopyButton text={JSON.stringify(product)} />
			</div>
			<div className="group flex items-center relative m-auto">
				<ProductCard product={product} onClick={handleFixJson} />
				<ProductJSON
					product={product}
					className={`${
						fixJSON ? "" : "opacity-0"
					} transition-opacity duration-400 ease-out group-hover:opacity-100  absolute h-full w-full overflow-hidden`}
				/>
			</div>
		</div>
	)
}

export default ProductViewer
