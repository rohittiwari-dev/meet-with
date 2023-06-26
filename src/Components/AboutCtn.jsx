import React from "react";
import phone from "../Assets/nirvanaAbout.png";
import "./AboutCtn.scss";
import { NavLink } from "react-router-dom";

const AboutCtn = () => {
	return (
		<>
			<section className="about-section">
				<div className="phone">
					<img src={phone} alt="" data-aos={"fade-right"} />
					<div className="right" data-aos={"fade-left"}>
						<h1>
							Connect, <br />
							<span style={{ color: "red" }}>
								Anywhere, Anytime,
							</span> <br /> and Enjoy.
						</h1>
						<p>
							-&gt; Get Free Trials, High Discounts and 24X7 Customer Support
							<br />
							-&gt; Get Bulk Purchases for Corporates.
						</p>
						<NavLink className={"demo-btn"} to="pricing">
							Get Demo &nbsp;{" "}
							<i className="fa-solid fa-up-right-from-square"></i>
						</NavLink>
						<div className="about-features">
							<div className="features-item">
								<div className="icon">
									<i className="fa-solid fa-video"></i>
								</div>
								<h2 className="title-item">Meetings</h2>
								<p>Allow the Users to Meet Together Online Mode</p>
							</div>
							<div className="features-item">
								<div
									style={{ backgroundColor: "rgb(0,208,130)" }}
									className="icon"
								>
									<i className="fa-regular fa-comment-dots"></i>
								</div>
								<h2 className="title-item">Chat</h2>
								<p>Chat Together in Online Meeting and Share your Views</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-features" data-aos={"fade-right"}>
					<div className="about-features">
						<div className="features-item">
							<div
								style={{ backgroundColor: "rgba(6,147,227,1)" }}
								className="icon"
							>
								<i className="fa-solid fa-users-viewfinder"></i>
							</div>
							<h2 className="title-item">Conference</h2>
							<p>Secured Meetings, Password Protected, End2End Encryptions</p>
						</div>
						<div className="features-item">
							<div
								style={{ backgroundColor: "rgb(155,81,224)" }}
								className="icon"
							>
								<i className="fa-regular fa-calendar"></i>
							</div>
							<h2 className="title-item">Online Webinar</h2>
							<p>Secured Meetings, Password Protected, End2End Encryptions</p>
						</div>
						<div className="features-item">
							<div style={{ backgroundColor: "#ff6900" }} className="icon">
								<i className="fa-solid fa-square-poll-horizontal"></i>
							</div>
							<h2 className="title-item">Polls</h2>
							<p>Secured Meetings, Password Protected, End2End Encryptions</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutCtn;
