import React from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
	return (
		<header className="w-full bg-gradient-to-b from-blue-200 to-blue-300 ">
			<div className="py-3 text-center border-b-4 border-blue-500 backdrop-blur	bg-opacity-80 bg-white">
				<Link href="/discover" className="inline-flex items-center gap-4">
					<Image
						src="/favicon.webp"
						className="object-contain"
						width={60}
						height={60}
						alt="astro logo"
					/>
					<h1 className="text-blue-500 font-semibold text-3xl">
						Astro Supporter
					</h1>
				</Link>
			</div>
		</header>
	)
}

export default Header
