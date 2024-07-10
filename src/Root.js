import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.js'

import PageNotFound from './pages/pagenotfound.js' 

const Root = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/">
				<Route index element={<App />} />
				<Route path="*" element={<PageNotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>
)

export default Root