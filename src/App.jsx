import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./components/UI/Loader";
import Homepage from "./pages/Home";
import NavBar from "./components/UI/NavBar";
import About from "./pages/About";
import Footer from "./components/UI/Footer";
import ToTop from "./components/UI/ToTop";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [loading, setLoading] = useState(true);
	let location = useLocation().pathname;

	const [path, setPath] = useState(location);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='h-fit-content bg-powder dark:bg-[#14274E] to-bg-[#050505] dark:text-white duration-500 ease-in-out'>
			<div>
				{loading ? (
					<Loader loading={loading} />
				) : (
					<>
						<NavBar active={path} setPath={setPath} darkMode={darkMode} setDarkMode={setDarkMode} />
						<main>
							<ToTop />
							<Routes>
								<Route path='/' element={<Homepage />} />
								<Route path='*' element={<NotFound />} />
								<Route path='/about' element={<About />} />
								<Route path='/projects' element={<Projects />} />
								<Route path='/contact' element={<Contact />} />
							</Routes>
						</main>
						<Footer />
					</>
				)}
			</div>
		</div>
	);
}

export default App;
