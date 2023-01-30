import Link from "next/link"
import React from "react"

const PrimaryButton = ({ asLink, className, children, ...props }) => {
	className = `${className} bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold px-5 py-2`
	return asLink ? (
		<Link className={className} {...props}>
			{children}
		</Link>
	) : (
		<button className={className} {...props}>
			{children}
		</button>
	)
}

export default PrimaryButton
