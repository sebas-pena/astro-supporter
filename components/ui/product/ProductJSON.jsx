"use client"
import React from "react"
import JSONPretty from "react-json-pretty"

const ProductJSON = ({ className = "", product }) => {
	return (
		<JSONPretty
			className={`${className} flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow p-3 pr-1 pb-1 border border-white bg-white`}
			theme={{
				main: "line-height:1.3;color:#283593;overflow:auto;height:100%;width:100%;",
				error:
					"line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
				key: "color:#d81b60;font-weight:700;",
				string: "color:#fd971f;",
				value: "color:#0a776c;",
				boolean: "color:#ac81fe;",
			}}
			data={product}
			space="4"
		/>
	)
}

export default ProductJSON
