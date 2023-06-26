import React from "react";
import "./SubscribeModule.scss";
import { Link } from "react-router-dom";

const SubscribeModule = (props) => {
	const LinkM = () => {
		if (props.name === "Mail Us") {
			return (
				<a className="sub-btn" href={props.link}>
					{props.name}&nbsp; <i className="fa-solid fa-envelope-open-text"></i>
				</a>
			);
		} else {
			return (
				<Link className="sub-btn" to={props.link + "#contact-form"}>
					{props.name}&nbsp; <i className="fa-solid fa-envelope-open-text"></i>
				</Link>
			);
		}
	};

	return (
		<section className="section-contact-sub">
			<div className="left" data-aos="zoom-out">
				<p>
					Subscribe Us and Receive <span>Updates</span> and <span>News</span>
				</p>
				<div className="subsinput">
					<input type="email" />
					<i className="fa-solid fa-paper-plane"></i>
				</div>
				<button className="sub-btn">
					Subscribe&nbsp; <i className="fa-solid fa-envelopes-bulk"></i>
				</button>
			</div>
			<div className="right" data-aos="zoom-out">
				<p>
					Need our <span>Support </span> ? or puzuled in <span>Queries</span>?,
					Get Connected With Us.
				</p>
				<i className="fa-solid fa-headset"></i>
				<LinkM />
			</div>
		</section>
	);
};

export default SubscribeModule;
