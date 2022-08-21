import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import HeaderTopbar from './HeaderTopbar';

function Header() {
	const [isActive, setIsActive] = useState(false);
	// This styling will be applied to a <NavLink> when the
	// route that it links to is currently selected.
	let activeStyle = {
		textDecoration: "underline",
	};


	let activeClassName = "underline";

	return (
		<div>
			<HeaderTopbar />
			<nav>
				<ul>
					<li>
						<NavLink
							to="messages">
							Messages
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? activeClassName : undefined
							}
						>
							Tasks
						</NavLink>
					</li>
					<li>
						<NavLink to="/details">
							{({ isActive }) => (
								<span
									className={
										isActive ? activeClassName : undefined
									}
								>
									Tasks
								</span>
							)}
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;