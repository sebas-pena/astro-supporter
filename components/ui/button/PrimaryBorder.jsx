import React from "react"

const PrimaryBorderButton = ({ asLink, className, children, ...props }) => {
	className = `${className} bg-white border-blue-500 text-blue-500 border-2 hover:bg-gray-100 rounded-lg font-semibold px-5 py-2`
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

export default PrimaryBorderButton
