import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
function HeaderMenu() {
	const [stickyClass, setStickyClass] = useState('relative');

	let activeStyle = {
		textDecoration: "underline",
	};
	let activeClassName = "underline";

	useEffect(() => {
		window.addEventListener('scroll', stickNavbar);

		return () => {
			window.removeEventListener('scroll', stickNavbar);
		};
	}, []);

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowHeight = window.scrollY;
			windowHeight > 200 ? setStickyClass('fixedTop') : setStickyClass('relative');
		}
	};

	return (
		<div className={`main-header ${stickyClass}`}>
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="brand-logo">
							<a href="/">
								Car <span>Detailing</span>
							</a>
						</div>

					</div>
					<div className="col-md-8">
						<nav>
							<ul>
								<li>
									<NavLink
										to="/"
										className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
									>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink 
										to="about"
										className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
									>
										About
									</NavLink>
								</li>
								<li>
									<NavLink 
										to="/service"
										className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
									>
										Service
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderMenu;