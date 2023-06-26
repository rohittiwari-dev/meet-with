import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import "animate.css";

function slidemenu() {
	var slide = document.getElementById("hambugger");
	slide.style.opacity = "0";
	var body = document.querySelector("html");
	body.style.overflowY = "hidden";
	var target = document.getElementById("hambugger-target");
	target.classList.add("active");
}
const slidemenu_of = () => {
	var slide = document.getElementById("hambugger");
	slide.style.opacity = "1";
	var body = document.querySelector("html");
	body.style.overflowY = "auto";
	var target = document.getElementById("hambugger-target");
	target.classList.remove("active");
};

const bodyScroll = () => {
	var body = document.querySelector("html");
	body.style.overflowY = "auto";
};

const Navbar = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const updateWidthAndHeight = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", updateWidthAndHeight);
		if (width > 900) {
			slidemenu_of();
		}
	}, [width]);
	return (
		<>
			<header className="header">
				<div className="leftnav animate__animated  animate__rubberBand ">
					<img className="logo-img" src={logo} alt="" />
					<h3 className="logo-text">
						Meet
						<span style={{ color: "rgb(3, 143, 224)" }}>With</span>
					</h3>
				</div>
				<div id="hambugger-target" className="midnav">
					<button
						id="hamb-btn-1"
						onClick={slidemenu_of}
						className="hambugger-front animate "
					>
						<i className="fa-solid fa-xmark"></i>
					</button>
					<ul className="nav-menu">
						<NavLink
							onClick={bodyScroll}
							end
							className="nav-item"
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							onClick={bodyScroll}
							end
							className="nav-item"
							to="/about"
						>
							About
						</NavLink>
						<NavLink
							onClick={bodyScroll}
							end
							className="nav-item"
							to="/pricing"
						>
							Pricing
						</NavLink>
						<NavLink
							onClick={bodyScroll}
							end
							className="nav-item"
							to="/features"
						>
							Features
						</NavLink>
						<NavLink
							onClick={bodyScroll}
							end
							className="nav-item"
							to="/contact-us"
						>
							Contact Us
						</NavLink>
					</ul>
					<div className="buttons">
						<NavLink
							onClick={bodyScroll}
							end
							to="/signin"
							className="nav-signin"
						>
							Sign In
						</NavLink>
						<NavLink
							onClick={bodyScroll}
							end
							to="/signup"
							className="nav-signup"
						>
							Sign Up
						</NavLink>
					</div>
				</div>
				<div id="hambugger" className="rightnav">
					<button
						id="hamb-btn-2"
						onClick={slidemenu}
						className="hambugger"
					>
						<i className="fa-solid fa-bars"></i>
					</button>
				</div>
			</header>
		</>
	);
};

export default Navbar;
