import React from "react"
import JSONPretty from "react-json-pretty"

export const JSONDisplayer = ({ className, json }) => {
	return (
		<JSONPretty
			className={className}
			theme={{
				main: "line-height:1.3;color:#283593;overflow:auto;height:100%;width:100%;",
				error:
					"line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
				key: "color:#d81b60;font-weight:700;",
				string: "color:#fd971f;",
				value: "color:#0a776c;",
				boolean: "color:#ac81fe;",
			}}
			data={json}
			space="4"
		/>
	)
}

export default JSONDisplayer
