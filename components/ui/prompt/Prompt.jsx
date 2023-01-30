import React from "react"
import ReactTextareaAutosize from "react-textarea-autosize"
import QuestionButton from "../button/Question"

const PromptInput = ({ placeholder, onSubmit, onChange }) => {
	return (
		<form
			onSubmit={onSubmit}
			className="w-full flex gap-2 rounded-xl shadow p-3 border border-white "
		>
			<div className="grow min-h-[56px] focus-within:outline focus-within:outline-gray-800 outline-2 rounded-lg">
				<ReactTextareaAutosize
					className="w-full px-4 py-2 focus:outline-none resize-none"
					placeholder={placeholder}
					onChange={(e) => onChange(e.target.value)}
				/>
			</div>
			<QuestionButton type="submit" />
		</form>
	)
}

export default PromptInput
