import "../styles/globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body className="flex flex-col h-screen p-0 m-0 relative">
				<Header />
				<main className="grow w-full max-w-4xl m-auto">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
