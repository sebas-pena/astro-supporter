import React from "react"
import Image from "next/image"
import PrimaryButton from "@/components/ui/button/Primary"

const HomePage = () => {
	return (
		<section className="h-full flex items-center gap-2 py-4 px-2 ">
			<div className="text-center">
				<h2 className="max-w-md text-2xl font-semibold mb-5 py-2 rounded-lg text-slate-800">
					Promote your products with the help of artificial intelligence.
				</h2>
				<PrimaryButton href="/discover" asLink>
					Try it
				</PrimaryButton>
			</div>
			<Image
				width={550}
				height={550}
				className="object-contain"
				alt="ai"
				src="/bot.webp"
			/>
		</section>
	)
}

export default HomePage
