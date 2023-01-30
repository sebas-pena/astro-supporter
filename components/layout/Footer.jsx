import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
	return (
		<footer className="text-center">
			<Link
				href="https://github.com/sebas-pena/"
				className="inline-flex justify-center items-center gap-2 py-4 font-semibold"
			>
				<Image width={18} height={18} alt="github icon" src="/svg/github.svg" />
				<span>sebas-pena</span>
			</Link>
		</footer>
	)
}

export default Footer
