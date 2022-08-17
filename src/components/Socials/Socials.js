import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Socials.scss';

function Socials() {
	return (
		<div className="cd__socials_wrapper">
			<a href="#">
				<FontAwesomeIcon icon={faTwitter} />
			</a>
			<a href="#">
				<FontAwesomeIcon icon={faPinterest} />
			</a>
			<a href="#">
				<FontAwesomeIcon icon={faInstagram} />
			</a>
			<a href="#">
				<FontAwesomeIcon icon={faFacebook} />
			</a>
		</div>
	);
}

export default Socials;