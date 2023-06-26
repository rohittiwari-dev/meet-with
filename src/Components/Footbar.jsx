import "./Footbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

const Footbar = () => {
	return (
		<>
			<footer>
				<div className="container">
					<div className="first " data-aos={"fade-right"}>
						<div className="left ">
							<div className="heading">
								<img
									className="logo-img"
									src={logo}
									alt=""
									width="35px"
								/>
								<h3 className="logo-text">
									Meet
									<span style={{ color: "rgb(3, 143, 224)" }}>
										With
									</span>
								</h3>
							</div>
							<p>
								MeetWith is the Easieat Way to start Online
								Event Or Instant Meetings
							</p>
							<NavLink
								className={"foot-items"}
								to="/privacy-policy"
							>
								<i className="fa-solid fa-lock"></i>
								<span>&nbsp;&nbsp;</span>Privacy Policy
							</NavLink>
							<br />
							<NavLink
								className={"foot-items"}
								to="/termscondition"
							>
								<i className="fa-solid fa-terminal"></i>
								<span>&nbsp;&nbsp;</span>Terms & Conditions
							</NavLink>
						</div>

						<div className="mid">
							<NavLink className={"foot-items"} to="/faq">
								FAQ
							</NavLink>
							<NavLink className={"foot-items"} to="/about">
								About Us
							</NavLink>
							<NavLink className={"foot-items"} to="/support">
								Support
							</NavLink>
							<NavLink className={"foot-items"} to="/feedback">
								Feedback
							</NavLink>
						</div>

						<div className="right">
							<div className="location">
								<div>
									<p>
										33649 Rene Fork,Raphaelmouth,Nebraska-
										31668
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
					</div>

					<div className="second" data-aos={"fade-left"}>
						<div className="left">
							<p>
								Developed By
								<br />
								<a href="https://www.niladvantage.com">
									Rohit Tiwari
								</a>
							</p>
						</div>
						<div className="right">
							<p>Follow US</p>
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
					</div>

					<div className="third">
						<a href="https://www.niladvantage.com">
							&copy; 2022 Rohit Tiwari
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footbar;
