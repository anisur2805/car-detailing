import { faCoffee, faMapLocation, faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import Socials from "../../components/Socials/Socials";

function HeaderTopbar() {
	return (
		<div className='cd__header_top'>
			<div className="container">
				<div className="row">
					<div className="col-md-4 text-center text-xs-left">
						<p>
							<a href="#">
							<FontAwesomeIcon icon={faMapLocation} /> West anderson court  32
							</a>
						</p>
					</div>
					<div className="col-md-4 text-center my-xs-2">
						<p><a href="tel:0412345678">
						<FontAwesomeIcon icon={faPhone} /> 0412 345 678
						</a></p>
					</div>
					<div className="col-md-4 text-center text-xs-right">
						<div className="cd__socials">
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderTopbar;