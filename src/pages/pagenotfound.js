import Link from 'next/link';

export default function App() {
	return (
		<>
			<div className="text-center h-[100vh] w-2/4 mx-auto flex">
				<div className="!z-5 relative w-full rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none p-10 m-auto">
					<p className="mb-0 text-3xl font-bold text-dark-grey-900">404</p>
					<p className="mb-6 text-dark-grey-700">Page Not Found</p>
					<Link href="/" className="items-center px-5 py-3 text-sm text-white border rounded-xl border-purple-500 bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-100 transition duration-300">Back to home page</Link>
				</div>
			</div>
		</>
	)
}
