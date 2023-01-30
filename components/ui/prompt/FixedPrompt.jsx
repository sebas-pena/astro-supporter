import React from "react"
import CopyButton from "../button/Copy"

const FixedPrompt = ({ prompt, title }) => {
	return (
		<div className="md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow p-3 border border-white bg-white">
			<div className="flex gap-4 my-3 justify-center items-center ">
				<h3 className="text-xl font-semibold">{title}</h3>
				<CopyButton text={prompt} />
			</div>
			<p className="whitespace-pre-line">{prompt.trim()}</p>
		</div>
	)
}

export default FixedPrompt
