import React from "react";
import "./Home.scss";
import Navbar from "../../Components/Navbar";
import Footbar from "../../Components/Footbar";
import logo from "../../Assets/homeheader.gif";
import madein from "../../Assets/madeinindia.gif";
import AboutSection from "../../Components/AboutCtn";
import downloadScreen from "../../Assets/downloadPng.png";
import SubscribeModule from "../../Components/SubscribeModule";

const Home = () => {
	return (
		<>
			<section className="home-head">
				<Navbar />
				<div className="content">
					<div className="hctn-left animate__animated animate__lightSpeedInLeft">
						<h1>Welcome</h1>
						<p>
							MeetWith is the Easieat Way to start Online Event Or
							Instant Meetings. MeetWith is an Instant Video
							Conferencing Platform, That help you Meet, Discuss
							and Bild Relationships from Anyware.
						</p>
						<div className="buttons">
							<button className="create">Create</button>
							<button className="join">Join</button>
						</div>
					</div>
					<div className="hctn-right">
						<img src={logo} alt="" width="100%" />
					</div>
				</div>
			</section>
			<AboutSection />
			<section className="section-about" data-aos="zoom-out">
				<h1>
					<span style={{ color: "rgb(15, 172, 75)" }}> Made </span>{" "}
					<span style={{ color: "rgb(20, 118, 230)" }}>
						in India{" "}
					</span>{" "}
					<span style={{ color: "rgb(218, 100, 32)" }}>
						Initiative
					</span>
				</h1>
				<p>
					MeetWith is a Video Conferencing Solution Developed By Rohit
					Tiwari
				</p>
				<div className="center">
					<div className="left">
						<img src={madein} alt="" />
					</div>
					<div className="right">
						<p>
							We have Video Conferencing Solution referred as
							"Meet-With", Whoose Frontend, Integration and
							Backend is Developed By Rohit Tiwari, WebRTC is Open
							Source Application JitsiMeet.
							<br />{" "}
							<span style={{ color: "rgb(218, 100, 32)" }}>
								"This is All in one Video Conferencing Solution
								and Webinar Solution"
							</span>
						</p>
					</div>
				</div>
			</section>
			<section className="section-appDownload">
				<div className="left">
					<div className="blin-ball">
						<i className="fa-solid fa-download"></i>
					</div>
					<h1 data-aos="fade-right" className="dowm-title">
						Our App Available For Android Device Download now
					</h1>
					<p data-aos="zoom-out">
						Get The App From the Link Below, Offers and Free Trails
						Available
						<br />
						Get the App Now
					</p>
					<button
						className="download-playstore"
						onClick={() => {
							window.location.href =
								"https://play.google.com/store/apps/details?id=org.jitsi.meet&pli=1";
						}}
					></button>
					<button
						className="download-applestore"
						onClick={() => {
							window.location.href =
								"https://apps.apple.com/us/app/jitsi-meet/id1165103905";
						}}
					></button>
				</div>
				<img data-aos="fade-left" src={downloadScreen} alt="" />
			</section>
			<SubscribeModule name="Contact Us" link="/contact-us" />
			<Footbar />
		</>
	);
};

export default Home;
