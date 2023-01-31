import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
	return (
		<footer className="text-center py-4">
			<div className="inline-flex justify-center items-center font-semibold">
				<p>
					<Link href="https://github.com/sebas-pena/">
						<span>sebas-pena</span>
					</Link>
					<span>/</span>
					<Link href="https://github.com/sebas-pena/Astro-Supporter">
						astro-supporter
					</Link>
				</p>
			</div>
			<p>
				powered by{" "}
				<Link href="https://cohere.ai/" className="font-semibold">
					Cohere ai
				</Link>
			</p>
		</footer>
	)
}

export default Footer
