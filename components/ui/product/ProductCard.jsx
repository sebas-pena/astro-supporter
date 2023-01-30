import Image from "next/image"
import React from "react"
import CopyButton from "../button/Copy"
import PrimaryButton from "../button/Primary"

const ProductCard = ({ product, props, className }) => {
	return (
		<div
			{...props}
			className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow p-3 border border-white bg-white"
		>
			<div className="w-full md:w-1/3 bg-white grid place-items-center">
				<Image
					width={200}
					height={200}
					className="object-contain"
					alt={product.name}
					src={product.image}
				/>
			</div>
			<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div className="flex gap-4 items-center justify-center md:justify-start">
					<p className="text-gray-500 py-1 font-medium text-md ">
						{product.category}
					</p>
					<svg
						className="w-4 h-4 ml-2 -mr-1"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						></path>
					</svg>
					<div className="bg-gray-200 px-3 py-1 rounded-full text-md font-medium text-gray-800">
						{product.subcategory}
					</div>
				</div>
				<h3 className="font-black text-gray-800 md:text-3xl text-xl">
					{product.name}
				</h3>
				<p className="md:text-lg text-gray-500 text-base">
					{product.description}
				</p>
				<p className="text-xl font-black text-gray-800">${product.price}</p>
			</div>
		</div>
	)
}

export default ProductCard
