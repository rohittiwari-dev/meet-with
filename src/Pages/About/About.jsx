import React from "react";
import Footbar from "../../Components/Footbar";
import Navbar from "../../Components/Navbar";
import "./About.scss";

const About = () => {
	return (
		<>
			<section className="section-about-us">
				<Navbar />
			</section>
			<Footbar />
		</>
	);
};

export default About;
