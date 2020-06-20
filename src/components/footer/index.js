import React from "react";
import "./style.css";
import imgLogo from "../../assets/img/logo192.png";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<Link to={"/"}>
				<img src={imgLogo} className="App-logo" alt=""></img>
			</Link>
			<div>© Copyright 2020 · All Rights Reserved</div>
		</footer>
	);
}

export default Footer;
