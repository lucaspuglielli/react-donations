import React from "react";
import "./style.css";
import imgLogo from "../../assets/img/logo192.png";
import { Link } from "react-router-dom";

function Header() {
	const listaDeLinks = ["doacoes", "empresa", "contato"];
	return (
		<nav>
			<Link className="link" to={"/"}>
				<img src={imgLogo} alt="" className="navlogo App-logo"></img>
				<h1>logo</h1>
			</Link>
			<ul className="navul">
				<Link className="link" to={"/"}>
					<li>home</li>
				</Link>
				{listaDeLinks.map((link, index) => (
					<Link className="link" to={"/" + link}>
						<li key={index}>{link}</li>
					</Link>
				))}
			</ul>
		</nav>
	);
}

export default Header;
