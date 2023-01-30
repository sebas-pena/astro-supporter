"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import PrimaryButton from "./Primary"

const CopyButton = ({ text }) => {
	const [showTooltipe, setShowToltip] = useState(false)

	useEffect(() => {
		const id = setTimeout(() => {
			if (showTooltipe) setShowToltip(false)
		}, 500)

		return () => {
			clearTimeout(id)
		}
	}, [showTooltipe])
	const copyToClipboard = () => {
		navigator.clipboard.writeText(text)
		if (showTooltipe) return
		setShowToltip(true)
	}
	return (
		<div className="relative">
			<PrimaryButton onClick={copyToClipboard}>
				<Image
					width={20}
					height={20}
					src="/svg/clipboard.svg"
					alt="clipboard"
				/>
			</PrimaryButton>
			{showTooltipe && (
				<p className="absolute text-thin animate-fade-in -right-24 top-0 rounded-md py-1 px-4 border-slate-800 border-2">
					copied
				</p>
			)}
		</div>
	)
}

export default CopyButton
