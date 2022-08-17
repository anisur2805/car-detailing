import React from 'react';
import './Banner.scss';

function Banner() {
	return (
		<div className="cd__banner">
			<div className="container">
				<div className="row">
					<div className="col-md-12 cd__banner_content text-center ">
						<h1> It's time to <br />Come Clean Your Car </h1>
						<p>Etiam faucibus bibendum tortor sed tristique ligula Ut nisl eros finibus non vestibulum sed metus  vehicula</p>
						<a href="#" className="cd__btn">Call Now</a>
					</div>
				</div>
			</div>
			<div className="cd__banner_overlay"></div>
		</div>
	);
}

export default Banner;