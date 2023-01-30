import React from "react"
import CrossButton from "../button/Cross"

const ObjectDetail = ({ object, title }) => {
	return (
		<>
			<dt>
				<span className="font-semibold">{title}</span>:
			</dt>
			<dd>
				<code className="block mx-5 p-2 rounded-lg bg-blue-100">
					&#123;
					<br />
					{Object.keys(object).map((key) => (
						<p key={key}>
							&nbsp;&nbsp;<span className="font-semibold">{key}</span>:{" "}
							{object[key].type}
						</p>
					))}
					&#125;
				</code>
				<ul className="list-disc pl-9 mt-4">
					{Object.keys(object).map((key) => (
						<li>
							<span className="font-semibold italic">{key}</span>:{" "}
							{object[key].description}
						</li>
					))}
				</ul>
			</dd>
		</>
	)
}

const ApiRefModal = ({ endpoint, method, body, response, closeModal }) => {
	const handleCloseModal = (e) => {
		if (e.target.classList.contains("modal-back")) closeModal()
	}
	return (
		<section
			onClick={handleCloseModal}
			className="modal-back fixed flex px-4 items-center justify-center w-full h-full bg-black bg-opacity-60 top-0 left-0"
		>
			<div className="relative bg-white rounded-lg p-4 w-full max-w-3xl">
				<h3 className="text-center text-2xl">API Reference</h3>
				<CrossButton className="absolute right-4 top-4" onClick={closeModal} />
				<dl className="flex flex-col gap-3">
					<div className="flex font-semibold">
						<dt className="font-semibold ">Endpoint:</dt>
						<dd className="ml-4 italic text-blue-500">
							<code>{endpoint}</code>
						</dd>
					</div>
					<div className="flex">
						<dt className="font-semibold">Method</dt>:{" "}
						<dd className="ml-4">{method}</dd>
					</div>
					<ObjectDetail object={body} title="Request Body" />
					<ObjectDetail object={response} title="Response" />
				</dl>
			</div>
		</section>
	)
}

export default ApiRefModal
