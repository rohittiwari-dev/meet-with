import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Features from "./Pages/Features/Features";
import Contact from "./Pages/Contact-us/Contact";
import Pricing from "./Pages/Pricing/Pricing";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import AOS from "aos";
import ScrollToTop from "./Components/ScrolltoTop";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import "./App.scss";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 600,
			delay: 50,
			once: true,
		});
	}, []);

	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/features" element={<Features />} />
				<Route exact path="/contact-us" element={<Contact />} />
				<Route exact path="/pricing" element={<Pricing />} />
				<Route exact path="/signin" element={<Signin />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
}

export default App;
