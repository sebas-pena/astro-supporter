import Image from "next/image"
import React from "react"

const QuestionButton = ({ className, ...props }) => {
	className = `${className} disabled:bg-blue-300 p-[8px] bg-blue-500 rounded-lg`

	return (
		<button {...props} className={className}>
			<Image
				width={40}
				height={40}
				alt="question icon"
				src="/svg/question.svg"
				className="inline-block"
			/>
		</button>
	)
}

export default QuestionButton
