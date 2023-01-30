import Image from "next/image"
import React from "react"

const QuestionButton = (props) => {
	return (
		<button
			{...props}
			className="disabled:bg-blue-300 h-[56px] w-[56px] bg-blue-500 p-2 rounded-lg"
		>
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
