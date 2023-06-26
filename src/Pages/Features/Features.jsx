import React from "react";
import Footbar from "../../Components/Footbar";
import Navbar from "../../Components/Navbar";
import "./Features.scss";

const Features = () => {
	return (
		<>
			<section className="section">
				<Navbar />
			</section>
			<Footbar />
		</>
	);
};

export default Features;
