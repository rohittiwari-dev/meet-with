import React from "react";
import Footbar from "../../Components/Footbar";
import Navbar from "../../Components/Navbar";
import "./Contact.scss";
import "animate.css";
import contactImg from "../../Assets/Contact-Image.png";
import SubscribeModule from "../../Components/SubscribeModule";

const showmessage = () => {
	const message = document.getElementById("message");
	if (message.classList.contains("active"))
		message.classList.remove("active");
	else message.classList.add("active");
};

const Contact = () => {
	return (
		<>
			<section className="section">
				<Navbar />
				<div className="contact-head">
					<div className="left  animate__animated  animate__lightSpeedInLeft">
						<h2>
							Customer <span> Support &nbsp;</span>
							<i className="fa-solid fa-headset"></i>
						</h2>
						<hr align="left" />
						<p>
							We always always Welcome your Queries, and Provide
							our Valuable Customers Advantage to Resolve their
							Query or Problem Anywhere and Anytime.
						</p>
						<p className="ctn-note">
							Please Feel to Get Connected to us from your place.
						</p>
					</div>
					<div className="right   animate__animated  animate__lightSpeedInRight">
						<img src={contactImg} alt="" />
					</div>
				</div>
			</section>
			<section id="contact-form" className="ctn-form-section">
				<div className="left" data-aos="zoom-in">
					<div className="form">
						<div className="input">
							<i className="fa-solid inputicon fa-user-tie"></i>
							<input required type="text" />
							<p className="label">Name : </p>
						</div>
						<div className="input">
							<i className="fa-solid inputicon fa-envelope-open-text"></i>
							<input required placeholder="" type="email" />
							<p className="label">Email :</p>
						</div>
						<div className="input">
							<i className="inputicon fa-solid fa-phone"></i>
							<input placeholder="" required type="number" />
							<p className="label">Phone Number :</p>
						</div>
						<div className="input">
							<i className="fa-solid inputicon fa-message"></i>
							<input required type="text" placeholder="" />
							<p className="label">Subject :</p>
						</div>
						<div className="input">
							<i className="fa-brands inputicon fa-stack-exchange"></i>
							<textarea required placeholder=""></textarea>
							<p className="label label-message">
								Query / Message :
							</p>
						</div>
						<p id="message" className="message">
							Thankyou for getting Connected to Us.
							<br /> We have Raised a Ticket We will Soon Connect
							to You. Ticket has been sent to Your Email.
						</p>
						<button onClick={showmessage} className="ctn-s-btn">
							Submit
						</button>
					</div>
				</div>
				<div className="right" data-aos="zoom-in">
					<h1 className="ctn-head">Contact Us</h1>
					<hr width="20%" />
					<div className="ctn-details">
						<div className="location">
							<div>
								<p>
									33649 Rene Fork,Raphaelmouth,Nebraska- 31668
								</p>
							</div>
							&nbsp;&nbsp;
							<i className="fa-solid fa-location-dot"></i>
						</div>
						<a
							className={"foot-items"}
							href="mailto:info@niladvantage.com"
						>
							engineerboy.ran@gmail.com<span>&nbsp;</span>
							<i
								style={{ color: "red" }}
								className="fa-solid fa-envelope"
							></i>
						</a>
						<a className={"foot-items"} href="tel:+91449075797">
							+91-8888888888&nbsp;&nbsp;
							<i
								style={{ color: "green" }}
								className="fa-solid fa-mobile"
							></i>
						</a>
						<a
							className={"foot-items"}
							href="https://wa.me/918884950768"
						>
							+91-999999999&nbsp;&nbsp;
							<i
								style={{ color: "green" }}
								className="fa-brands fa-whatsapp"
							></i>
						</a>
					</div>
					<div className="social-foot-link">
						<a href="/">
							<i className="fa-brands instagram fa-instagram"></i>
						</a>
						<a href="/">
							<i className="fa-brands youtube fa-youtube"></i>
						</a>
						<a href="/">
							<i className="fa-brands facebook fa-facebook"></i>
						</a>
						<a href="/">
							<i className="fa-brands linkedin fa-linkedin-in"></i>
						</a>
						<a href="/">
							<i className="fa-brands twitter fa-twitter"></i>
						</a>
					</div>
				</div>
			</section>
			<SubscribeModule
				name="Mail Us"
				link="mailto:engineerboy.ran@gmail.com"
			/>
			<Footbar />
		</>
	);
};

export default Contact;
