import Image from "next/image"
import React from "react"
import { JSONDisplayer } from "../JSONDisplayer"

const PromptResult = ({
	response,
	placeholder,
	isJSON,
	experimental,
	responseStatus,
}) => {
	return (
		<div className="flex flex-col gap-4">
			{experimental && (
				<div className="flex flex-col  gap-2 sm:gap-4 sm:flex-row justify-center items-center">
					<Image
						width={40}
						height={40}
						src="/svg/experimental.svg"
						alt="experimental icon"
					/>
					<p className="text-[#f69337] font-semibold text-lg text-center">
						This feature is experimental and simply a proof of concept.
					</p>
				</div>
			)}
			<div className="flex flex-col gap-4 items-center sm:flex-row rounded-xl shadow p-3 border border-white bg-white">
				<div className="bg-white p-[6px] border-2 rounded-lg border-blue-500 shrink-0 h-max self-start w-full sm:w-max">
					<Image
						width={40}
						height={40}
						alt="astro logo"
						src="/favicon.webp"
						className="m-auto"
					/>
				</div>
				{
					{
						loading: (
							<Image
								src="/svg/typing.svg"
								height={40}
								width={40}
								className="m-auto sm:ml-0"
								alt="typing"
							/>
						),
						error: (
							<p className="flex items-center grow whitespace-pre-wrap text-red-500">
								{response}
							</p>
						),
						successful: (
							<>
								{isJSON ? (
									<JSONDisplayer json={response} />
								) : (
									<p className="flex items-center grow whitespace-pre-wra">
										{response}
									</p>
								)}
							</>
						),
						placeholder: (
							<p className="flex items-center grow whitespace-pre-wrap">
								{placeholder}
							</p>
						),
					}[responseStatus || "placeholder"]
				}
			</div>
		</div>
	)
}

export default PromptResult
