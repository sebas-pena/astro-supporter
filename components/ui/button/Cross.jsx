import Image from "next/image"
import React from "react"
import PrimaryButton from "./Primary"

const CrossButton = ({ className, ...props }) => {
	className = `${className} p-3 rounded-lg`
	return (
		<PrimaryButton className={className} {...props}>
			<Image src="/svg/cross.svg" width={20} height={20} />
		</PrimaryButton>
	)
}

export default CrossButton
